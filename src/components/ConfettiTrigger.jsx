import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

export default function ConfettiTrigger({ trigger, rarityConfig }) {
  const prev = useRef(false)

  useEffect(() => {
    if (trigger && !prev.current && rarityConfig) {
      const colors = ['#C41E3A', '#C8963E', '#2D2D2D', '#8C8078']

      confetti({
        particleCount: rarityConfig.confetti,
        spread: rarityConfig.spread,
        origin: { x: 0.5, y: 0.55 },
        colors,
        startVelocity: 35,
        gravity: 0.8,
        scalar: 1.2,
      })

      if (rarityConfig.label.includes('传说')) {
        setTimeout(() => {
          confetti({
            particleCount: 180, spread: 360, origin: { x: 0.5, y: 0.5 },
            colors: ['#C8963E', '#F5D88A', '#C41E3A'],
            startVelocity: 50, gravity: 0.5, scalar: 1.8, shapes: ['star'],
          })
        }, 200)
      }

      if (rarityConfig.label.includes('稀有')) {
        setTimeout(() => {
          confetti({
            particleCount: 100, spread: 140, origin: { x: 0.5, y: 0.5 },
            colors: ['#C8963E', '#C41E3A'],
            startVelocity: 30, gravity: 0.7, scalar: 1.1,
          })
        }, 300)
      }
    }
    prev.current = trigger
  }, [trigger, rarityConfig])

  return null
}