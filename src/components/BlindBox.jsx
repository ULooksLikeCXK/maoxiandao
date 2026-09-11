import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Sparkles } from 'lucide-react'

export default function BlindBox({ phase, onOpen }) {
  const isIdle = phase === 'idle'
  const isShaking = phase === 'shaking'
  const isOpening = phase === 'opening'
  const isRevealed = phase === 'revealed'

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ minHeight: 420 }}>
      {/* Idle ambient particles */}
      {isIdle && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 4 + Math.random() * 4,
                height: 4 + Math.random() * 4,
                background: ['#E8573A', '#F59E0B', '#0891B2'][i % 3],
                left: `${20 + i * 12 + Math.random() * 10}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
              animate={{
                y: [-20, -60],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.7 + Math.random(),
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* The Gift Box */}
      <AnimatePresence mode="wait">
        {!isOpening && !isRevealed && (
          <motion.div
            key="box"
            className="relative cursor-pointer select-none"
            onClick={isIdle ? onOpen : undefined}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.35 } }}
          >
            <motion.div
              className={isIdle ? 'animate-breathe' : isShaking ? 'animate-shake' : ''}
            >
              {/* Box body */}
              <div
                className="relative w-40 h-40 flex items-center justify-center shadow-box"
                style={{
                  borderRadius: 20,
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FDF8F3 100%)',
                  border: '1.5px solid rgba(0,0,0,0.06)',
                }}
              >
                {/* Box lid — sits on top */}
                <div
                  className="absolute top-0 left-0 right-0 h-14"
                  style={{
                    borderRadius: '20px 20px 4px 4px',
                    background: 'linear-gradient(180deg, #FFF 0%, #FAF3EB 100%)',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Ribbon across lid */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full"
                    style={{ background: 'linear-gradient(180deg, #E8573A 0%, #d4422f 100%)' }}
                  />
                  {/* Bow */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-0.5">
                    <div
                      className="w-7 h-5"
                      style={{
                        borderRadius: '50% 0 0 50%',
                        background: 'linear-gradient(135deg, #E8573A, #f06a55)',
                        transform: 'rotate(-30deg)',
                      }}
                    />
                    <div className="w-3 h-3 rounded-full bg-[#f06a55]" />
                    <div
                      className="w-7 h-5"
                      style={{
                        borderRadius: '0 50% 50% 0',
                        background: 'linear-gradient(225deg, #E8573A, #f06a55)',
                        transform: 'rotate(30deg)',
                      }}
                    />
                  </div>
                </div>

                {/* Question mark */}
                <motion.span
                  className="text-6xl font-bold select-none relative z-10"
                  style={{
                    color: '#E8573A',
                    marginTop: 16,
                    letterSpacing: '-0.02em',
                  }}
                >
                  ?
                </motion.span>

                {/* Bottom ribbon strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1.5"
                  style={{ background: 'linear-gradient(90deg, transparent 30%, #E8573A 30%, #E8573A 70%, transparent 70%)', borderRadius: '0 0 20px 20px' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening transition — flash of light */}
      {isOpening && (
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3.5, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div
            className="w-24 h-24 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(232,87,58,0.3), rgba(245,158,11,0.15), transparent 70%)' }}
          />
        </motion.div>
      )}

      {/* Button */}
      {isIdle && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <motion.button
            className="px-10 py-3.5 rounded-full text-base font-semibold text-white cursor-pointer shadow-card flex items-center gap-2"
            style={{ background: '#1A1A2E' }}
            whileHover={{ scale: 1.04, boxShadow: '0 4px 12px rgba(0,0,0,0.12), 0 12px 32px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpen}
          >
            <Gift className="w-4 h-4" />
            打开看看今天吃什么
          </motion.button>
          <p className="text-xs" style={{ color: '#9CA3AF' }}>点击盲盒或按钮</p>
        </div>
      )}

      {isShaking && (
        <motion.p
          className="mt-10 text-sm font-medium"
          style={{ color: '#E8573A' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          <Sparkles className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
          正在挑选...
        </motion.p>
      )}

      {isOpening && (
        <motion.p
          className="mt-10 text-lg font-bold"
          style={{ color: '#E8573A' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          今天吃这个！
        </motion.p>
      )}
    </div>
  )
}