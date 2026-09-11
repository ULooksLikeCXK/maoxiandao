import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift } from 'lucide-react'

export default function StartOverlay({ firstVisit, onDismiss }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (firstVisit) {
      const t = setTimeout(() => setShow(true), 200)
      return () => clearTimeout(t)
    }
  }, [firstVisit])

  if (!firstVisit || !show) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ background: 'rgba(26,26,46,0.6)', backdropFilter: 'blur(8px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDismiss}
      >
        <motion.div
          className="flex flex-col items-center gap-5 text-center max-w-sm w-full"
          initial={{ scale: 0.9, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.1 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Icon */}
          <motion.div
            className="w-28 h-28 flex items-center justify-center shadow-box"
            style={{
              borderRadius: 28,
              background: '#FFFFFF',
              border: '1.5px solid rgba(0,0,0,0.05)',
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Gift className="w-12 h-12" style={{ color: '#E8573A' }} />
          </motion.div>

          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: '#FFFFFF' }}>
              小彭今天吃什么
            </h1>
            <p className="text-sm mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
              打开盲盒，结束选择困难
            </p>
          </div>

          {/* CTA */}
          <motion.button
            className="px-10 py-3.5 rounded-full text-base font-semibold cursor-pointer flex items-center gap-2"
            style={{ background: '#E8573A', color: '#FFFFFF' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onDismiss}
          >
            <Gift className="w-4 h-4" />
            开始使用
          </motion.button>

          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>点击任意处开始</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}