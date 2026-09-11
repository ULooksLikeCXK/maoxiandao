import { motion } from 'framer-motion'

const BOX_SIZE = 200
const BORDER_WIDTH = 3

const shakeKeyframes = {
  x:      [0, -5, 5, -8, 8, -10, 10, -7, 7, -3, 3, 0],
  rotate: [0, -0.8, 0.8, -1.5, 1.5, -2, 2, -1.2, 1.2, -0.4, 0.4, 0],
}

const borderKeyframes = [
  '#D946EF', '#EA580C', '#D946EF', '#EA580C',
  '#D946EF', '#EA580C', '#D946EF', '#EA580C',
  '#D946EF', '#EA580C', '#D946EF', '#D946EF',
]

export default function BlindBox({ phase, onOpen }) {
  const isIdle = phase === 'idle'
  const isShaking = phase === 'shaking'
  const isOpening = phase === 'opening'

  return (
    <div className="flex flex-col items-center gap-7">
      {/* ── The Box ── */}
      <motion.button
        className="relative flex items-center justify-center cursor-pointer select-none outline-none"
        style={{
          width: BOX_SIZE,
          height: BOX_SIZE,
          background: 'var(--color-surface)',
          border: `${BORDER_WIDTH}px solid var(--color-brand)`,
          borderRadius: 14,
        }}
        // Animate border color through phases
        animate={{
          borderColor: isShaking
            ? borderKeyframes
            : isOpening
            ? ['#EA580C', '#D946EF']
            : '#D946EF',
          x: isShaking ? shakeKeyframes.x : 0,
          rotate: isShaking ? shakeKeyframes.rotate : 0,
          scale: isOpening ? [1, 1.08, 0] : 1,
        }}
        transition={
          isShaking
            ? { duration: 1.4, ease: 'easeInOut', times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.95, 1] }
            : isOpening
            ? { duration: 0.5, ease: 'easeOut' }
            : { duration: 0.25 }
        }
        onClick={isIdle ? onOpen : undefined}
        whileHover={isIdle ? { scale: 1.04 } : {}}
        whileTap={isIdle ? { scale: 0.97 } : {}}
      >
        {/* Pulse ring (idle only) */}
        {isIdle && (
          <div
            className="absolute inset-0 pointer-events-none animate-box-pulse"
            style={{ borderRadius: 12 }}
          />
        )}

        {/* Glow flash (opening) */}
        {isOpening && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'var(--color-brand)',
              borderRadius: 12,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.25, 0] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}

        {/* Question mark */}
        <motion.span
          className="font-bold select-none leading-none"
          style={{ fontSize: '4.5rem', color: 'var(--color-brand)' }}
          animate={{
            color: isShaking
              ? borderKeyframes
              : isOpening
              ? ['#D946EF', '#EA580C']
              : '#D946EF',
          }}
          transition={
            isShaking
              ? { duration: 1.4, ease: 'easeInOut', times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.95, 1] }
              : isOpening
              ? { duration: 0.5, ease: 'easeOut' }
              : {}
          }
        >
          ？
        </motion.span>
      </motion.button>

      {/* ── Status text ── */}
      {isIdle && (
        <p className="font-body text-sm tracking-wider" style={{ color: 'var(--color-dim)' }}>
          轻触盲盒，揭晓今日美味
        </p>
      )}
      {isShaking && (
        <p className="font-body text-sm tracking-wider" style={{ color: 'var(--color-brand)' }}>
          正在为你挑选…
        </p>
      )}
      {isOpening && (
        <p className="font-body text-sm tracking-wider" style={{ color: 'var(--color-accent)' }}>
          即将揭晓！
        </p>
      )}
    </div>
  )
}