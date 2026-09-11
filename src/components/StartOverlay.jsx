import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function WantedPoster() {
  return (
    <div className="relative" style={{ width: 200, height: 200 }}>
      {/* parchment base */}
      <div style={{
        position: 'absolute', inset: 0,
        background: '#F4ECD8',
        border: '5px solid var(--color-ink)',
        borderRadius: 8,
        boxShadow: '0 6px 0 rgba(62, 39, 35, 0.18), inset 0 0 40px rgba(139, 109, 82, 0.15)',
      }} />
      {/* WANTED header */}
      <div style={{
        position: 'absolute', top: 10, left: 0, right: 0,
        textAlign: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 14,
          color: 'var(--color-brand)',
          letterSpacing: '0.35em',
        }}>WANTED</span>
      </div>
      {/* Devil Fruit silhouette */}
      <div style={{
        position: 'absolute', top: 42, left: '50%', marginLeft: -42,
        width: 84, height: 84, borderRadius: '50%',
        background: 'linear-gradient(135deg, #AB47BC, #4A148C)',
        border: '3px solid var(--color-ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: '2.4rem', color: '#FFF', fontWeight: 900 }}>?</span>
      </div>
      {/* bounty line */}
      <div style={{
        position: 'absolute', top: 142, left: 0, right: 0,
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 15,
          color: 'var(--color-ink)',
          fontWeight: 900,
          letterSpacing: '0.1em',
        }}>今日美食悬赏</p>
      </div>
      {/* stamp */}
      <div style={{
        position: 'absolute', bottom: 14, right: 16,
        width: 36, height: 36, borderRadius: '50%',
        border: '2px solid var(--color-brand)',
        transform: 'rotate(-18deg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: 11, color: 'var(--color-brand)', fontWeight: 900 }}>⚓</span>
      </div>
    </div>
  )
}

export default function StartOverlay({ firstVisit, onDismiss }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (firstVisit) {
      const t = setTimeout(() => setShow(true), 300)
      return () => clearTimeout(t)
    }
  }, [firstVisit])

  if (!firstVisit || !show) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ background: 'rgba(62, 39, 35, 0.85)', backdropFilter: 'blur(5px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onDismiss}
      >
        {/* floating Belly coins ⚓ */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${8 + Math.random() * 84}%`,
                top: `${8 + Math.random() * 84}%`,
                fontSize: `${14 + Math.random() * 20}px`,
              }}
              animate={{
                y: [0, -(20 + Math.random() * 40)],
                opacity: [0.55, 0],
                rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
              }}
              transition={{
                duration: 2.5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeOut',
              }}
            >
              {['💰', '⭐', '⚓', '🪙'][i % 4]}
            </motion.div>
          ))}
        </div>

        {/* Center card — wanted poster style */}
        <motion.div
          className="relative flex flex-col items-center gap-4 text-center max-w-xs w-full px-6 py-8"
          style={{
            background: 'var(--color-surface)',
            border: '5px solid var(--color-ink)',
            borderRadius: 12,
            boxShadow: '0 10px 0 rgba(62, 39, 35, 0.20)',
          }}
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 160, damping: 16, delay: 0.1 }}
          onClick={e => e.stopPropagation()}
        >
          {/* top nail */}
          <div style={{
            position: 'absolute', top: -14,
            width: 16, height: 16, borderRadius: '50%',
            background: 'var(--color-gold)',
            border: '2px solid var(--color-ink)',
            boxShadow: '0 1px 0 rgba(62,39,35,0.3)',
          }} />

          <motion.div
            initial={{ rotate: -12, scale: 0.6 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 11, delay: 0.25 }}
          >
            <WantedPoster />
          </motion.div>

          <div className="flex flex-col items-center gap-1.5 -mt-2">
            <h1
              className="font-black text-2xl tracking-wide leading-tight"
              style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
            >
              小彭今天<span style={{ color: 'var(--color-brand)' }}>吃什么</span>
            </h1>
            <p className="text-sm font-bold tracking-wide" style={{ color: 'var(--color-dim)' }}>
              触碰恶魔果实，觉醒今日の美食之力
            </p>
          </div>

          <motion.button
            className="font-body text-base font-black tracking-wide cursor-pointer px-12 py-3.5"
            style={{
              background: 'var(--color-brand)',
              color: '#FFFFFF',
              border: '4px solid var(--color-ink)',
              borderRadius: 999,
              boxShadow: '0 5px 0 rgba(62, 39, 35, 0.22)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            whileHover={{ y: -2, background: '#8E0000', boxShadow: '0 7px 0 rgba(62, 39, 35, 0.22)' }}
            whileTap={{ y: 4, boxShadow: '0 1px 0 rgba(62, 39, 35, 0.22)' }}
            onClick={onDismiss}
          >
            出海！
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}