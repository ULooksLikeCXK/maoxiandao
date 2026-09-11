import { motion, AnimatePresence } from 'framer-motion'

export default function BlindBox({ phase, onOpen }) {
  const idle = phase === 'idle'
  const shaking = phase === 'shaking'
  const opening = phase === 'opening'
  const revealed = phase === 'revealed'

  return (
    <div className="relative flex flex-col items-center justify-center select-none" style={{ minHeight: 400 }}>
      <AnimatePresence mode="wait">
        {(idle || shaking) && (
          <motion.div
            key="oracle"
            className="flex flex-col items-center cursor-pointer"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={idle ? onOpen : undefined}
          >
            {/* The Oracle Circle */}
            <motion.div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 200, height: 200,
                background: '#FFFFFF',
                border: '1px solid var(--rule)',
              }}
              animate={
                idle
                  ? {}
                  : { x: [0,-6,6,-10,10,-4,4,0], rotate: [0,-1,1,-2,2,0] }
              }
              transition={
                shaking
                  ? { duration: 0.1, repeat: 14, ease: 'easeInOut' }
                  : {}
              }
            >
              <span
                className="font-display text-7xl font-bold"
                style={{ color: 'var(--ink)', lineHeight: 1, marginTop: -4 }}
              >
                {shaking ? '…' : '？'}
              </span>
            </motion.div>

            {/* Label below the circle */}
            <p className="font-display text-sm mt-8 tracking-widest" style={{ color: 'var(--text-dim)' }}>
              {shaking ? '挑选中' : '轻触圆环'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening flash */}
      {opening && (
        <motion.div
          className="absolute w-48 h-48 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.15), transparent 70%)' }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}