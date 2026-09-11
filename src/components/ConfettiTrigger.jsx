import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

export default function ConfettiTrigger({ trigger, rarityConfig }) {
  const prevTrigger = useRef(false)

  useEffect(() => {
    if (trigger && !prevTrigger.current && rarityConfig) {
      // Initial burst
      confetti({
        particleCount: rarityConfig.confetti,
        spread: rarityConfig.spread,
        origin: { x: 0.5, y: 0.45 },
        colors: ['#FF6B35', '#FFB347', '#FFD93D', '#FF8FAB', '#80FFDB', '#2EC4B6'],
        startVelocity: 45,
        gravity: 0.9,
        scalar: 1.5,
      })

      // Legendary: extra treats
      if (rarityConfig.label.includes('传说')) {
        setTimeout(() => {
          confetti({
            particleCount: 200,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#FFD93D', '#FFB347', '#FF6B35'],
            startVelocity: 60,
            gravity: 0.5,
            scalar: 2,
            shapes: ['star'],
          })
        }, 300)

        setTimeout(() => {
          confetti({ particleCount: 100, angle: 60, spread: 80, origin: { x: 0, y: 0.6 }, colors: ['#FF8FAB', '#FFD93D'] })
          confetti({ particleCount: 100, angle: 120, spread: 80, origin: { x: 1, y: 0.6 }, colors: ['#80FFDB', '#2EC4B6'] })
        }, 600)
      }

      if (rarityConfig.label.includes('稀有')) {
        setTimeout(() => {
          confetti({
            particleCount: 150,
            spread: 180,
            origin: { x: 0.5, y: 0.4 },
            colors: ['#FFB347', '#FFD93D', '#FF6B35', '#FF8FAB'],
            startVelocity: 40,
            gravity: 0.7,
            scalar: 1.3,
          })
        }, 400)
      }
    }

    prevTrigger.current = trigger
  }, [trigger, rarityConfig])

  return null
}