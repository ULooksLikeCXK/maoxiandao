import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

const COLORS = ['#FF8F00', '#FDD835', '#C62828', '#9C27B0', '#0D47A1', '#FFFDF5']

export default function ConfettiTrigger({ trigger, rarityConfig }) {
  const prev = useRef(false)

  useEffect(() => {
    if (trigger && !prev.current && rarityConfig) {
      // Main burst — gold treasure rain
      confetti({
        particleCount: rarityConfig.confetti || 100,
        spread: rarityConfig.spread || 100,
        origin: { x: 0.5, y: 0.55 },
        colors: COLORS,
        startVelocity: 38,
        gravity: 0.7,
        scalar: 1.1,
        shapes: ['circle', 'star'],
      })

      if (rarityConfig.label?.includes('传说')) {
        setTimeout(() => {
          confetti({
            particleCount: 240,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#FF8F00', '#FDD835', '#C62828', '#9C27B0', '#FFFDF5'],
            startVelocity: 60,
            gravity: 0.35,
            scalar: 1.8,
            shapes: ['star'],
          })
        }, 150)
      }

      if (rarityConfig.label?.includes('稀有')) {
        setTimeout(() => {
          confetti({
            particleCount: 120,
            spread: 160,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#FF8F00', '#C62828', '#9C27B0'],
            startVelocity: 36,
            gravity: 0.6,
            scalar: 1.2,
            shapes: ['circle', 'star'],
          })
        }, 250)
      }
    }
    prev.current = trigger
  }, [trigger, rarityConfig])

  return null
}