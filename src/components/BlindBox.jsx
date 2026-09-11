import { motion } from 'framer-motion'

const BOX_SIZE = 220

export default function BlindBox({ phase, onOpen }) {
  const isIdle = phase === 'idle'
  const isShaking = phase === 'shaking'
  const isOpening = phase === 'opening'

  return (
    <div className="flex flex-col items-center gap-6">
      {/* ── The Box ── */}
      <motion.button
        className="relative flex items-center justify-center cursor-pointer select-none outline-none"
        style={{
          width: BOX_SIZE,
          height: BOX_SIZE,
          background: 'var(--color-surface)',
          borderRadius: 20,
          border: '1px solid var(--color-border)',
          boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.04)',
        }}
        animate={{
          scale: isShaking
            ? [1, 1.02, 0.99, 1.02, 0.99, 1]
            : isOpening
            ? [1, 1.06, 0.95]
            : 1,
          borderColor: isOpening ? 'var(--color-brand)' : 'var(--color-border)',
        }}
        transition={
          isShaking
            ? { duration: 1.5, ease: 'easeInOut' }
            : isOpening
            ? { duration: 0.5, ease: 'easeOut' }
            : { duration: 0.2 }
        }
        onClick={isIdle ? onOpen : undefined}
        whileHover={isIdle ? { scale: 1.03, boxShadow: '0 1px 3px rgba(15,23,42,0.06), 0 6px 16px rgba(15,23,42,0.06)' } : {}}
        whileTap={isIdle ? { scale: 0.98 } : {}}
      >
        {/* Pulse ring — idle only */}
        {isIdle && (
          <div
            className="absolute inset-0 pointer-events-none animate-box-pulse"
            style={{ borderRadius: 19 }}
          />
        )}

        {/* The ? */}
        <motion.span
          className="font-bold select-none leading-none"
          style={{
            fontSize: '4.5rem',
            color: 'var(--color-brand)',
            fontFamily: 'var(--font-body)',
          }}
          animate={{
            opacity: isOpening ? [1, 0.6, 0] : 1,
          }}
          transition={isOpening ? { duration: 0.5, ease: 'easeOut' } : {}}
        >
          ？
        </motion.span>
      </motion.button>

      {/* ── Hint text ── */}
      {isIdle && (
        <p className="font-body text-sm tracking-wide" style={{ color: 'var(--color-dim)' }}>
          轻触盲盒，揭晓今日美味
        </p>
      )}
      {isShaking && (
        <p className="font-body text-sm tracking-wide" style={{ color: 'var(--color-brand)' }}>
          正在为你挑选…
        </p>
      )}
      {isOpening && (
        <p className="font-body text-sm tracking-wide" style={{ color: 'var(--color-brand)' }}>
          即将揭晓
        </p>
      )}
    </div>
  )
}