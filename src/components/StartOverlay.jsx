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
        style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onDismiss}
      >
        <motion.div
          className="flex flex-col items-center gap-7 text-center max-w-xs"
          initial={{ scale: 0.93, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Box preview */}
          <motion.div
            className="flex items-center justify-center"
            style={{
              width: 110,
              height: 110,
              background: '#FFFFFF',
              borderRadius: 16,
              boxShadow: '0 1px 2px rgba(15,23,42,0.06), 0 8px 24px rgba(15,23,42,0.10)',
            }}
            initial={{ rotate: -6, scale: 0.85 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 15, delay: 0.25 }}
          >
            <span
              className="font-bold select-none leading-none"
              style={{ fontSize: '3rem', color: 'var(--color-brand)' }}
            >
              ？
            </span>
          </motion.div>

          {/* Title */}
          <div className="flex flex-col items-center gap-1">
            <h1
              className="font-bold text-2xl tracking-wide leading-tight"
              style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)' }}
            >
              小彭今天吃什么
            </h1>
            <p
              className="text-sm tracking-wide"
              style={{ color: 'rgba(255,255,255,0.55)', fontStyle: 'italic' }}
            >
              daily food oracle
            </p>
          </div>

          {/* CTA */}
          <motion.button
            className="font-body text-base font-semibold tracking-wide cursor-pointer px-14 py-3.5 border-none"
            style={{
              background: 'var(--color-brand)',
              color: '#FFFFFF',
              borderRadius: 10,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            whileHover={{ background: 'var(--color-brand-deep)', scale: 1.03 }}
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