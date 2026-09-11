import { motion } from 'framer-motion'

const SIZE = 220
const CX = SIZE / 2
const CY = SIZE / 2 + 5 /* slight optical shift down for stem */

export default function DevilFruit({ phase, onOpen }) {
  const isIdle = phase === 'idle'
  const isShaking = phase === 'shaking'
  const isOpening = phase === 'opening'
  const isRevealed = phase === 'revealed'

  if (isRevealed) return null /* FoodCard takes over */

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.button
        className="relative cursor-pointer select-none outline-none bg-transparent border-none p-0"
        style={{ width: SIZE, height: SIZE + 60 }}
        animate={
          isShaking
            ? { rotate: [-4, 4, -6, 6, -5, 5, -2, 0] }
            : isOpening
            ? { scale: [1, 1.08, 1.04] }
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
        whileTap={isIdle ? { scale: 0.94 } : {}}
      >
        {/* ground shadow */}
        <div
          className="absolute"
          style={{
            bottom: 20, left: '10%', right: '10%', height: 14,
            borderRadius: '50%',
            background: 'rgba(62, 39, 35, 0.20)',
            filter: 'blur(5px)',
          }}
        />

        {/* === STEM === */}
        <motion.div
          className="absolute"
          style={{ top: 5, left: '50%', marginLeft: -6, zIndex: 5 }}
          animate={isOpening ? { y: -30, rotate: -40, opacity: [1, 0.8, 0] } : { y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          {/* stem shaft */}
          <div
            style={{
              width: 12, height: 42,
              background: 'linear-gradient(180deg, #81C784, #388E3C)',
              borderRadius: '6px 6px 3px 3px',
              transform: 'rotate(-10deg)',
              transformOrigin: 'bottom center',
              boxShadow: '1px 2px 3px rgba(0,0,0,0.18)',
            }}
          >
            {/* leaf left */}
            <div style={{
              position: 'absolute', top: 2, left: 9,
              width: 26, height: 15,
              background: '#66BB6A',
              borderRadius: '70% 0 70% 0',
              transform: 'rotate(28deg)',
              boxShadow: 'inset -2px -2px 3px rgba(0,0,0,0.1)',
            }} />
            {/* leaf right */}
            <div style={{
              position: 'absolute', top: 10, right: 8,
              width: 22, height: 12,
              background: '#4CAF50',
              borderRadius: '0 70% 0 70%',
              transform: 'rotate(-22deg)',
              boxShadow: 'inset -2px -2px 3px rgba(0,0,0,0.1)',
            }} />
          </div>
        </motion.div>

        {/* === FRUIT BODY === */}
        <div className={isIdle ? 'animate-float' : ''} style={{ position: 'absolute', top: 28, left: 0, width: SIZE, height: SIZE + 8 }}>

          {/* glow ring — idle only */}
          {isIdle && (
            <div
              className="absolute inset-0 pointer-events-none animate-fruit-glow"
              style={{ borderRadius: '50%' }}
            />
          )}

          {/* base sphere — built with layered SVG so swirls rotate during shake */}
          <motion.svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            width={SIZE} height={SIZE}
            style={{ position: 'absolute', top: 0, left: 0 }}
            animate={isShaking ? { rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360] } : isOpening ? { rotate: 360, scale: [1, 1.12, 0.96] } : { rotate: 0, scale: 1 }}
            transition={isShaking ? { duration: 2.5, ease: 'linear', repeat: Infinity } : isOpening ? { duration: 0.5, ease: 'easeOut' } : {}}
          >
            <defs>
              <radialGradient id="fruitGrad" cx="38%" cy="32%">
                <stop offset="0%" stopColor="#E1BEE7" />
                <stop offset="25%" stopColor="#AB47BC" />
                <stop offset="65%" stopColor="#7B1FA2" />
                <stop offset="100%" stopColor="#4A148C" />
              </radialGradient>
              <radialGradient id="fruitHighlight" cx="32%" cy="28%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>

            {/* solid border ring */}
            <circle cx={CX} cy={CY-4} r={104} fill="var(--color-ink)" />

            {/* fruit fill */}
            <circle cx={CX} cy={CY-4} r={99} fill="url(#fruitGrad)" />

            {/* swirl pattern 1 */}
            <path
              d="M 62 58 Q 90 25 130 42 Q 165 58 158 98 Q 150 142 105 152 Q 58 158 50 118"
              fill="none"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* swirl pattern 2 */}
            <path
              d="M 78 38 Q 118 22 162 58 Q 188 88 170 135 Q 148 172 92 168 Q 52 162 44 128"
              fill="none"
              stroke="rgba(206,147,216,0.35)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* swirl pattern 3 */}
            <path
              d="M 48 92 Q 64 62 102 58 Q 142 56 168 92 Q 180 132 142 158 Q 98 178 56 150"
              fill="none"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* swirl pattern 4 */}
            <path
              d="M 94 24 Q 138 28 170 72 Q 190 114 158 156 Q 120 182 74 164 Q 38 142 40 104"
              fill="none"
              stroke="rgba(179,136,255,0.28)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* highlight sheen */}
            <circle cx={CX} cy={CY-4} r={99} fill="url(#fruitHighlight)" />

            {/* opening burst — white flash */}
            {isOpening && (
              <circle cx={CX} cy={CY-4} r={99} fill="white" opacity={0.5}>
                <animate attributeName="opacity" values="0;0.6;0" dur="0.5s" fill="freeze" />
              </circle>
            )}

            {/* inner border for badge */}
            <circle cx={CX} cy={CY-4} r={46} fill="none" stroke="var(--color-ink)" strokeWidth="4" />
            <circle cx={CX} cy={CY-4} r={44} fill="var(--color-surface)" />

            {/* ? — fades during opening */}
            <motion.text
              x={CX} y={CY+8}
              textAnchor="middle"
              fontSize="42"
              fontWeight="900"
              fill="var(--color-ink)"
              fontFamily="var(--font-body)"
              style={{ userSelect: 'none' }}
              animate={isOpening ? { opacity: [1, 0.3, 0], scale: [1, 1.2, 0.6] } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              ?
            </motion.text>
          </motion.svg>

          {/* sparkles during shake */}
          {isShaking && (
            <motion.div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.3, 0.8, 0], scale: [1, 1.2, 1.05, 1.2, 1] }}
              transition={{ duration: 1.5 }}
            >
              <span style={{ fontSize: '3.8rem' }}>💥</span>
            </motion.div>
          )}

          {/* opening energy burst */}
          {isOpening && (
            <motion.div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 1, 0], scale: [0.6, 2.5, 3] }}
              transition={{ duration: 0.55 }}
            >
              <div
                style={{
                  width: 180, height: 180, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(156,39,176,0.5) 0%, rgba(156,39,176,0) 70%)',
                }}
              />
            </motion.div>
          )}
        </div>
      </motion.button>

      {/* hint text */}
      {isIdle && (
        <p className="font-body text-base font-bold tracking-wide text-center" style={{ color: 'var(--color-dim)' }}>
          恶魔果实藏着什么力量？点一下揭晓
        </p>
      )}
      {isShaking && (
        <p className="font-body text-base font-bold tracking-wide" style={{ color: 'var(--color-brand)' }}>
          果实正在觉醒……
        </p>
      )}
      {isOpening && (
        <p className="font-body text-base font-bold tracking-wide" style={{ color: 'var(--color-fruit)' }}>
          能力觉醒！马上揭晓 💥
        </p>
      )}
    </div>
  )
}