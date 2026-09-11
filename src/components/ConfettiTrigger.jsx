import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

export default function ConfettiTrigger({ trigger, rarityConfig }) {
  const prev = useRef(false)

  useEffect(() => {
    if (trigger && !prev.current && rarityConfig) {
      const colors = ['#E8573A', '#F59E0B', '#FBBF24', '#0891B2', '#A78BFA', '#34D399']

      confetti({
        particleCount: rarityConfig.confetti,
        spread: rarityConfig.spread,
        origin: { x: 0.5, y: 0.5 },
        colors,
        startVelocity: 40,
        gravity: 0.8,
        scalar: 1.4,
      })

      if (rarityConfig.label.includes('传说')) {
        setTimeout(() => {
          confetti({
            particleCount: 200,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#F59E0B', '#FBBF24', '#FDE68A', '#E8573A'],
            startVelocity: 55,
            gravity: 0.5,
            scalar: 2,
            shapes: ['star'],
          })
        }, 250)
        setTimeout(() => {
          confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0, y: 0.6 }, colors: ['#E8573A', '#F59E0B'] })
          confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1, y: 0.6 }, colors: ['#0891B2', '#34D399'] })
        }, 500)
      }

      if (rarityConfig.label.includes('稀有')) {
        setTimeout(() => {
          confetti({
            particleCount: 120,
            spread: 150,
            origin: { x: 0.5, y: 0.45 },
            colors: ['#F59E0B', '#FBBF24', '#E8573A'],
            startVelocity: 35,
            gravity: 0.7,
            scalar: 1.2,
          })
        }, 350)
      }
    }
    prev.current = trigger
  }, [trigger, rarityConfig])

  return null
}