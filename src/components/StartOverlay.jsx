import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StartOverlay({ firstVisit, streak, onDismiss }) {
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
        style={{ background: 'var(--color-brand)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onDismiss}
      >
        <motion.div
          className="flex flex-col items-center gap-7 text-center max-w-xs"
          initial={{ scale: 0.92, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
          onClick={e => e.stopPropagation()}
        >
          {/* ── Inner box ── */}
          <motion.div
            className="flex items-center justify-center"
            style={{
              width: 110,
              height: 110,
              background: '#FFFFFF',
              borderRadius: 12,
            }}
            initial={{ rotate: -8, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15,
              delay: 0.3,
            }}
          >
            <span
              className="font-bold select-none leading-none"
              style={{ fontSize: '3.2rem', color: 'var(--color-brand)' }}
            >
              ？
            </span>
          </motion.div>

          {/* ── Title ── */}
          <div className="flex flex-col items-center gap-1.5">
            <h1
              className="font-bold text-2xl tracking-wide leading-tight"
              style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)' }}
            >
              小彭今天吃什么
            </h1>
            <p
              className="font-display text-sm italic tracking-wide"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              / daily food oracle
            </p>
          </div>

          {/* ── CTA ── */}
          <motion.button
            className="font-body text-base font-semibold tracking-wider cursor-pointer px-14 py-3.5 border-none"
            style={{
              background: '#FFFFFF',
              color: 'var(--color-brand)',
              borderRadius: 8,
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, background: '#FDF4FF' }}
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