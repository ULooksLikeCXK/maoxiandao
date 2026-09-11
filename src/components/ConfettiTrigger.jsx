import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

const COLORS = ['#D946EF', '#EA580C', '#C026D3', '#F5F3FF', '#A21CAF']

export default function ConfettiTrigger({ trigger, rarityConfig }) {
  const prev = useRef(false)

  useEffect(() => {
    if (trigger && !prev.current && rarityConfig) {
      // Main burst
      confetti({
        particleCount: rarityConfig.confetti || 80,
        spread: rarityConfig.spread || 100,
        origin: { x: 0.5, y: 0.55 },
        colors: COLORS,
        startVelocity: 38,
        gravity: 0.75,
        scalar: 1.1,
      })

      // Legendary: gold star burst
      if (rarityConfig.label?.includes('传说')) {
        setTimeout(() => {
          confetti({
            particleCount: 200,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#EA580C', '#FBBF24', '#D946EF', '#FFFFFF'],
            startVelocity: 55,
            gravity: 0.45,
            scalar: 1.6,
            shapes: ['star'],
          })
        }, 150)
      }

      // Rare: extra pop
      if (rarityConfig.label?.includes('稀有')) {
        setTimeout(() => {
          confetti({
            particleCount: 90,
            spread: 130,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#D946EF', '#C026D3', '#F5F3FF'],
            startVelocity: 32,
            gravity: 0.7,
            scalar: 1.0,
          })
        }, 250)
      }
    }
    prev.current = trigger
  }, [trigger, rarityConfig])

  return null
}