import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Sparkles } from 'lucide-react'

export default function StartOverlay({ firstVisit, streak, onDismiss }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (firstVisit) {
      const t = setTimeout(() => setVisible(true), 400)
      return () => clearTimeout(t)
    }
  }, [firstVisit])

  if (!firstVisit || !visible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDismiss}
      >
        <motion.div
          className="flex flex-col items-center gap-5 text-center max-w-sm"
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Icon */}
          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className="w-28 h-28 rounded-3xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(145deg, #2d1b69, #7c3aed)',
                boxShadow: '0 0 60px rgba(124,58,237,0.5), 0 0 100px rgba(236,72,153,0.2)',
              }}
            >
              <Gift className="w-14 h-14 text-white" />
            </div>
            <motion.span
              className="absolute -top-2 -right-2 text-3xl"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.div>

          {/* Title */}
          <div>
            <h1
              className="text-3xl font-black mb-1"
              style={{
                background: 'linear-gradient(135deg, #e9d5ff, #c084fc, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              冒险岛
            </h1>
            <p className="text-lg font-bold text-purple-200">盲盒吃饭</p>
          </div>

          {/* Description */}
          <p className="text-sm text-purple-400 leading-relaxed">
            每天不知道吃什么？<br />
            打开盲盒，让命运帮你决定今天的美味冒险！<br />
            <span className="text-purple-500 text-xs mt-1 block">
              连续打卡还有连击加成哦 🔥
            </span>
          </p>

          {/* Start button */}
          <motion.button
            className="mt-4 px-10 py-4 rounded-full text-lg font-bold text-white cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              boxShadow: '0 0 30px rgba(236,72,153,0.4), 0 4px 20px rgba(0,0,0,0.3)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(236,72,153,0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onDismiss}
          >
            <Sparkles className="inline w-5 h-5 mr-1.5 -mt-0.5" />
            开始冒险
          </motion.button>

          <p className="text-xs text-purple-600">点击任意处或按按钮开始</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}