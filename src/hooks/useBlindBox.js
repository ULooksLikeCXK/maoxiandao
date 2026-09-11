import { useState, useCallback, useRef } from 'react'
import FOODS, { RARITY_CONFIG } from '../data/foods'
import { loadData, saveData, recordOpening, getToday } from '../utils/storage'

// State machine: idle → shaking → opening → revealed
const PHASE = { IDLE: 'idle', SHAKING: 'shaking', OPENING: 'opening', REVEALED: 'revealed' }

export default function useBlindBox() {
  const [phase, setPhase] = useState(PHASE.IDLE)
  const [selectedFood, setSelectedFood] = useState(null)
  const [category, setCategory] = useState('全部')
  const [data, setData] = useState(loadData)
  const timerRef = useRef(null)

  const isTodayOpened = data.history.length > 0 && data.history[0].date === getToday()

  // Pick a random food, weighted by rarity
  const pickFood = useCallback(() => {
    const pool = category === '全部'
      ? FOODS
      : FOODS.filter(f => f.category === category)

    // Weight by rarity
    const weights = { common: 70, rare: 25, legendary: 5 }
    const totalWeight = pool.reduce((sum, f) => sum + (weights[f.rarity] || weights.common), 0)
    let rand = Math.random() * totalWeight

    for (const food of pool) {
      rand -= weights[food.rarity] || weights.common
      if (rand <= 0) return food
    }
    return pool[pool.length - 1]
  }, [category])

  const openBox = useCallback(() => {
    if (phase !== PHASE.IDLE) return

    setPhase(PHASE.SHAKING)
    setSelectedFood(null)

    // Phase 1: shaking → opening (1.5s)
    timerRef.current = setTimeout(() => {
      const food = pickFood()
      setSelectedFood(food)
      setPhase(PHASE.OPENING)

      // Phase 2: opening → revealed (0.6s)
      timerRef.current = setTimeout(() => {
        setPhase(PHASE.REVEALED)
        const newData = recordOpening(food, data)
        setData(newData)
      }, 600)
    }, 1500)
  }, [phase, pickFood, data])

  const reset = useCallback(() => {
    setPhase(PHASE.IDLE)
    setSelectedFood(null)
  }, [])

  const handleCategoryChange = useCallback((cat) => {
    if (phase === PHASE.SHAKING || phase === PHASE.OPENING) return
    setCategory(cat)
    reset()
  }, [phase, reset])

  // Cleanup timers on unmount
  const cleanup = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [])

  return {
    phase,
    selectedFood,
    rarityConfig: selectedFood ? RARITY_CONFIG[selectedFood.rarity] : null,
    category,
    setCategory: handleCategoryChange,
    history: data.history,
    streak: data.streak,
    firstVisit: data.firstVisit,
    isTodayOpened,
    markVisited: () => setData(d => { saveData({ ...d, firstVisit: false }); return { ...d, firstVisit: false } }),
    openBox,
    reset,
    cleanup,
  }
}