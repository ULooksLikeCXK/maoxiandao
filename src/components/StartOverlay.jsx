import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'

function MiniCapsule() {
  const S = 110, H = S / 2
  const inset = 'inset 0 0 0 4px var(--color-ink)'
  return (
    <div className="relative" style={{ width: S, height: S }}>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: S, height: H, background: '#FFF', borderRadius: '0 0 999px 999px', boxShadow: inset }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: S, height: H, background: 'var(--color-brand)', borderRadius: '999px 999px 0 0', boxShadow: inset }} />
      <div className="absolute flex items-center justify-center" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 48, height: 48, borderRadius: '50%', background: '#FFF', boxShadow: inset }}>
        <span className="font-black leading-none" style={{ fontSize: '1.5rem', color: 'var(--color-ink)' }}>?</span>
      </div>
      <div className="absolute" style={{ top: '26%', left: '22%' }}>
        <Heart size={16} fill="#FFF" color="#FFF" style={{ opacity: 0.9 }} />
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
        style={{ background: 'rgba(247, 242, 233, 0.96)', backdropFilter: 'blur(3px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onDismiss}
      >
        {/* floating hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -(20 + Math.random() * 40)],
                opacity: [0.5, 0],
                scale: [0.7 + Math.random() * 0.6, 1 + Math.random()],
              }}
              transition={{
                duration: 2.5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeOut',
              }}
            >
              <Heart
                size={12 + Math.random() * 16}
                fill={i % 2 === 0 ? 'rgba(224,90,71,0.35)' : 'rgba(244,167,185,0.45)'}
                color="transparent"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative flex flex-col items-center gap-6 text-center max-w-xs w-full px-8 py-10"
          style={{
            background: 'var(--color-surface)',
            border: '4px solid var(--color-ink)',
            borderRadius: 32,
            boxShadow: '0 10px 0 rgba(114, 83, 73, 0.14)',
          }}
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 170, damping: 17, delay: 0.1 }}
          onClick={e => e.stopPropagation()}
        >
          <motion.div
            initial={{ rotate: -10, scale: 0.7 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 0.25 }}
          >
            <MiniCapsule />
          </motion.div>

          <div className="flex flex-col items-center gap-2">
            <span
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand)' }}
            >
              for my love
            </span>
            <h1
              className="font-black text-2xl tracking-wide leading-tight"
              style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
            >
              小彭今天吃什么
            </h1>
            <p className="text-sm font-bold tracking-wide" style={{ color: 'var(--color-dim)' }}>
              扭一下，每天一个小惊喜
            </p>
          </div>

          <motion.button
            className="font-body text-base font-black tracking-wide cursor-pointer px-12 py-3.5"
            style={{
              background: 'var(--color-brand)',
              color: '#FFFFFF',
              border: '4px solid var(--color-ink)',
              borderRadius: 999,
              boxShadow: '0 5px 0 rgba(114, 83, 73, 0.18)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            whileHover={{ y: -2, background: '#C74838', boxShadow: '0 7px 0 rgba(114, 83, 73, 0.18)' }}
            whileTap={{ y: 4, boxShadow: '0 1px 0 rgba(114, 83, 73, 0.18)' }}
            onClick={onDismiss}
          >
            打开看看
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
