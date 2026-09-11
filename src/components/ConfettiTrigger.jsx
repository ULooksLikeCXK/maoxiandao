import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

const COLORS = ['#0D9488', '#F97316', '#FBBF24', '#38BDF8', '#FFFFFF']

export default function ConfettiTrigger({ trigger, rarityConfig }) {
  const prev = useRef(false)

  useEffect(() => {
    if (trigger && !prev.current && rarityConfig) {
      confetti({
        particleCount: rarityConfig.confetti || 80,
        spread: rarityConfig.spread || 100,
        origin: { x: 0.5, y: 0.55 },
        colors: COLORS,
        startVelocity: 38,
        gravity: 0.75,
        scalar: 1.1,
      })

      if (rarityConfig.label?.includes('传说')) {
        setTimeout(() => {
          confetti({
            particleCount: 200,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#FBBF24', '#F97316', '#0D9488', '#FFFFFF'],
            startVelocity: 55,
            gravity: 0.45,
            scalar: 1.6,
            shapes: ['star'],
          })
        }, 150)
      }

      if (rarityConfig.label?.includes('稀有')) {
        setTimeout(() => {
          confetti({
            particleCount: 90,
            spread: 130,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#0D9488', '#38BDF8', '#FBBF24'],
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