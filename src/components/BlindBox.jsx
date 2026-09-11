import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const SIZE = 220
const HALF = SIZE / 2
const INK_INSET = 'inset 0 0 0 5px var(--color-ink)'

export default function BlindBox({ phase, onOpen }) {
  const isIdle = phase === 'idle'
  const isShaking = phase === 'shaking'
  const isOpening = phase === 'opening'

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.button
        className="relative cursor-pointer select-none outline-none bg-transparent border-none p-0"
        style={{ width: SIZE, height: SIZE + 14 }}
        animate={
          isShaking
            ? { rotate: [-3, 3, -5, 5, -4, 4, -2, 0] }
            : isOpening
            ? { scale: [1, 1.05, 1] }
            : { rotate: 0, scale: 1 }
        }
        transition={
          isShaking
            ? { duration: 1.5, ease: 'easeInOut' }
            : isOpening
            ? { duration: 0.5, ease: 'easeOut' }
            : { duration: 0.3 }
        }
        onClick={isIdle ? onOpen : undefined}
        whileHover={isIdle ? { scale: 1.05 } : {}}
        whileTap={isIdle ? { scale: 0.95 } : {}}
      >
        {/* ground shadow */}
        <div
          className="absolute"
          style={{
            bottom: 0, left: '8%', right: '8%', height: 12,
            borderRadius: '50%',
            background: 'rgba(114, 83, 73, 0.18)',
            filter: 'blur(4px)',
          }}
        />

        {/* capsule body — floats gently when idle */}
        <div
          className={isIdle ? 'animate-float' : ''}
          style={{ position: 'absolute', top: 0, left: 0, width: SIZE, height: SIZE }}
        >
          {/* bottom half */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0,
              width: SIZE, height: HALF,
              background: 'var(--color-surface)',
              borderRadius: '0 0 999px 999px',
              boxShadow: INK_INSET,
            }}
          />

          {/* top half — pops off when opening */}
          <motion.div
            style={{
              position: 'absolute', top: 0, left: 0,
              width: SIZE, height: HALF,
              background: 'var(--color-brand)',
              borderRadius: '999px 999px 0 0',
              boxShadow: INK_INSET,
              transformOrigin: '85% 100%',
            }}
            animate={isOpening ? { y: -200, rotate: -32, opacity: [1, 1, 0] } : { y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* little heart sticker */}
            <div className="absolute" style={{ top: '30%', left: '24%' }}>
              <Heart size={26} fill="#FFFFFF" color="#FFFFFF" style={{ opacity: 0.9 }} />
            </div>
          </motion.div>

          {/* center medallion with ? */}
          <motion.div
            className="absolute flex items-center justify-center"
            style={{
              top: '50%', left: '50%',
              width: 88, height: 88,
              borderRadius: '50%',
              background: 'var(--color-surface)',
              boxShadow: INK_INSET,
            }}
            initial={{ x: '-50%', y: '-50%' }}
            animate={
              isOpening
                ? { x: '-50%', y: '-50%', scale: [1, 1.25, 0], opacity: [1, 1, 0] }
                : { x: '-50%', y: '-50%', scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span
              className="font-black select-none leading-none"
              style={{ fontSize: '2.8rem', color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
            >
              ?
            </span>
          </motion.div>

          {/* sparkles while shaking */}
          {isShaking && (
            <motion.div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0.3, 0.7, 0], scale: [1, 1.15, 1.05, 1.15, 1] }}
              transition={{ duration: 1.5 }}
            >
              <span style={{ fontSize: '4rem' }}>✨</span>
            </motion.div>
          )}
        </div>
      </motion.button>

      {/* hint text */}
      {isIdle && (
        <p className="font-body text-base font-bold tracking-wide text-center" style={{ color: 'var(--color-dim)' }}>
          点一下扭蛋，帮你决定今天的美味
        </p>
      )}
      {isShaking && (
        <p className="font-body text-base font-bold tracking-wide" style={{ color: 'var(--color-brand)' }}>
          咕噜咕噜……正在扭动
        </p>
      )}
      {isOpening && (
        <p className="font-body text-base font-bold tracking-wide" style={{ color: 'var(--color-brand-deep)' }}>
          掉出来啦 ✨
        </p>
      )}
    </div>
  )
}
