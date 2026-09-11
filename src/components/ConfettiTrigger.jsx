import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

export default function ConfettiTrigger({ trigger, rarityConfig }) {
  const prevTrigger = useRef(false)

  useEffect(() => {
    if (trigger && !prevTrigger.current && rarityConfig) {
      const duration = 1500
      const end = Date.now() + duration

      const frame = () => {
        confetti({
          particleCount: rarityConfig.confetti / 10,
          spread: rarityConfig.spread,
          origin: { x: 0.5, y: 0.5 },
          colors: rarityConfig.colors,
          startVelocity: 30,
          gravity: 0.8,
          scalar: 1.2,
        })

        if (rarityConfig.label && Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }

      // Fire initial big burst
      confetti({
        particleCount: rarityConfig.confetti,
        spread: rarityConfig.spread,
        origin: { x: 0.5, y: 0.45 },
        colors: rarityConfig.colors,
        startVelocity: 45,
        gravity: 1,
        scalar: 1.5,
      })

      // For legendary, fire multiple bursts
      if (rarityConfig.label.includes('传说')) {
        setTimeout(() => {
          confetti({
            particleCount: 200,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#f59e0b', '#fbbf24', '#fcd34d'],
            startVelocity: 60,
            gravity: 0.5,
            scalar: 2,
          })
        }, 300)

        // Side cannons
        setTimeout(() => {
          confetti({ particleCount: 100, angle: 60, spread: 80, origin: { x: 0, y: 0.6 }, colors: ['#f59e0b', '#ef4444'] })
          confetti({ particleCount: 100, angle: 120, spread: 80, origin: { x: 1, y: 0.6 }, colors: ['#f59e0b', '#ef4444'] })
        }, 600)
      }

      if (rarityConfig.label.includes('稀有')) {
        setTimeout(() => {
          confetti({
            particleCount: 150,
            spread: 180,
            origin: { x: 0.5, y: 0.4 },
            colors: rarityConfig.colors,
            startVelocity: 40,
            gravity: 0.7,
            scalar: 1.3,
          })
        }, 400)
      }

      frame()
    }

    prevTrigger.current = trigger
  }, [trigger, rarityConfig])

  return null
}