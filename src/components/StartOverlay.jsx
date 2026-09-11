import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function StartOverlay({ firstVisit, streak, onDismiss }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (firstVisit) {
      const t = setTimeout(() => setVisible(true), 300)
      return () => clearTimeout(t)
    }
  }, [firstVisit])

  if (!firstVisit || !visible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ background: 'rgba(45,27,14,0.7)', backdropFilter: 'blur(12px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDismiss}
      >
        <motion.div
          className="flex flex-col items-center gap-5 text-center max-w-sm"
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.15 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Gachapon machine icon */}
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(160deg, #FFF 0%, #FFF8F0 70%, #FFECD2 100%)',
                boxShadow: `
                  8px 8px 24px rgba(180,140,100,0.2),
                  -6px -6px 20px rgba(255,255,255,0.9),
                  inset 2px 2px 4px rgba(255,255,255,0.8)
                `,
                border: '3px solid rgba(255,179,71,0.25)',
              }}
            >
              <span
                className="text-5xl font-black"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  background: 'linear-gradient(135deg, #FF6B35, #FFB347)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ?
              </span>
            </div>
            <motion.span
              className="absolute -top-1.5 -right-1.5 text-4xl"
              animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.25, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.div>

          {/* Title */}
          <div>
            <h1
              className="text-4xl font-black mb-1 tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              <span style={{ color: '#FF6B35' }}>冒险</span>
              <span style={{ color: '#FFB347' }}>岛</span>
            </h1>
            <p className="text-lg font-extrabold" style={{ fontFamily: "'Nunito', sans-serif", color: '#FFD93D' }}>
              扭蛋 · 吃饭
            </p>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed font-semibold" style={{ fontFamily: "'Nunito', sans-serif", color: '#D4B896' }}>
            每天不知道吃什么？<br />
            转动扭蛋机，让命运帮你决定<br />
            今天的美味冒险！
          </p>

          {/* CTA */}
          <motion.button
            className="mt-4 px-12 py-4 rounded-full text-lg font-extrabold text-white cursor-pointer shadow-xl"
            style={{
              fontFamily: "'Nunito', sans-serif",
              background: 'linear-gradient(135deg, #FF6B35 0%, #FFB347 100%)',
              boxShadow: '0 6px 28px rgba(255,107,53,0.4), 0 2px 6px rgba(0,0,0,0.1)',
            }}
            whileHover={{ scale: 1.06, boxShadow: '0 8px 36px rgba(255,107,53,0.5), 0 4px 10px rgba(0,0,0,0.12)' }}
            whileTap={{ scale: 0.94 }}
            onClick={onDismiss}
          >
            <Sparkles className="inline w-5 h-5 mr-1.5 -mt-0.5" />
            开始冒险
          </motion.button>

          <p className="text-xs font-semibold" style={{ color: '#8B6F5C' }}>
            点击任意处或按按钮开始
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}