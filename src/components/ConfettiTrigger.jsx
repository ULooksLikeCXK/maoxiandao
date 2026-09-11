import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

const COLORS = ['#E05A47', '#F4A7B9', '#FBBF24', '#FFFFFF', '#725349']

export default function ConfettiTrigger({ trigger, rarityConfig }) {
  const prev = useRef(false)

  useEffect(() => {
    if (trigger && !prev.current && rarityConfig) {
      // Main burst — hearts mixed in
      confetti({
        particleCount: rarityConfig.confetti || 80,
        spread: rarityConfig.spread || 100,
        origin: { x: 0.5, y: 0.55 },
        colors: COLORS,
        startVelocity: 36,
        gravity: 0.7,
        scalar: 1.1,
        shapes: ['circle', 'heart'],
      })

      if (rarityConfig.label?.includes('传说')) {
        setTimeout(() => {
          confetti({
            particleCount: 200,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#FBBF24', '#E05A47', '#F4A7B9', '#FFFFFF'],
            startVelocity: 55,
            gravity: 0.4,
            scalar: 1.6,
            shapes: ['star', 'heart'],
          })
        }, 150)
      }

      if (rarityConfig.label?.includes('稀有')) {
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 140,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#E05A47', '#F4A7B9', '#FBBF24'],
            startVelocity: 32,
            gravity: 0.65,
            scalar: 1.1,
            shapes: ['circle', 'heart'],
          })
        }, 250)
      }
    }
    prev.current = trigger
  }, [trigger, rarityConfig])

  return null
}
