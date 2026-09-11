import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StartOverlay({ firstVisit, onDismiss }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (firstVisit) { const t = setTimeout(() => setShow(true), 200); return () => clearTimeout(t) }
  }, [firstVisit])

  if (!firstVisit || !show) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ background: 'rgba(26,26,26,0.5)', backdropFilter: 'blur(6px)' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onDismiss}
      >
        <motion.div
          className="flex flex-col items-center gap-6 text-center max-w-xs"
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Circle */}
          <motion.div
            className="flex items-center justify-center"
            style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'var(--white)', border: '1px solid var(--rule)',
            }}
          >
            <span className="font-display text-5xl font-bold" style={{ color: 'var(--ink)' }}>？</span>
          </motion.div>

          <div>
            <h1 className="font-display text-2xl font-bold tracking-wide" style={{ color: 'var(--white)' }}>
              小彭今天吃什么
            </h1>
            <p className="font-body text-sm mt-2 tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>
              轻触圆环，揭晓今日美味
            </p>
          </div>

          <motion.button
            className="font-body text-sm px-10 py-3 cursor-pointer tracking-widest"
            style={{ background: 'var(--seal)', color: 'var(--white)', borderRadius: 2 }}
            whileHover={{ background: '#A01830' }}
            whileTap={{ scale: 0.97 }}
            onClick={onDismiss}
          >
            开始
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}