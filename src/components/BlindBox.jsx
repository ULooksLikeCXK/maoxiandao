import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const CAPSULE_COLORS = [
  { bg: '#FFD93D', shadow: '#E6C235', accent: '#FFF3B0' },
  { bg: '#FF8FAB', shadow: '#E67A94', accent: '#FFC2D1' },
  { bg: '#80FFDB', shadow: '#66E6C2', accent: '#B8FFEC' },
  { bg: '#FFB347', shadow: '#E69A30', accent: '#FFD09E' },
  { bg: '#A78BFA', shadow: '#8B6FE6', accent: '#DDD6FE' },
  { bg: '#2EC4B6', shadow: '#25A99D', accent: '#7EDDD6' },
]

const FOOD_EMOJIS = ['🍜', '🍗', '🍕', '🍣', '🥘', '🍛', '🥟', '🍖', '🌮', '🍩']

export default function BlindBox({ phase, onOpen }) {
  const isIdle = phase === 'idle'
  const isShaking = phase === 'shaking'
  const isOpening = phase === 'opening'
  const isRevealed = phase === 'revealed'

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[440px]">
      {/* Background element — a subtle rotating candy-colored ring */}
      <motion.div
        className="absolute w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #FFD93D, #FF8FAB, #80FFDB, #FFB347, #A78BFA, #2EC4B6, #FFD93D)',
          opacity: 0.08,
          filter: 'blur(20px)',
        }}
        animate={{
          rotate: isShaking ? 360 * 3 : 360,
          scale: isOpening ? 2 : 1,
          opacity: isOpening ? 0.3 : isShaking ? 0.15 : 0.06,
        }}
        transition={{
          rotate: { duration: isShaking ? 1.5 : 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 0.5 },
          opacity: { duration: 0.3 },
        }}
      />

      {/* Floating food emojis — idle state only */}
      {isIdle && FOOD_EMOJIS.map((emoji, i) => {
        const angle = (Math.PI * 2 * i) / FOOD_EMOJIS.length
        const radius = 160 + Math.sin(i * 1.5) * 30
        return (
          <motion.span
            key={i}
            className="absolute text-2xl pointer-events-none select-none"
            style={{ top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }}
            animate={{
              x: Math.cos(angle + Date.now() * 0.00005) * radius,
              y: Math.sin(angle + Date.now() * 0.00005) * radius * 0.7,
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              opacity: { duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
              scale: { duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
            }}
          >
            {emoji}
          </motion.span>
        )
      })}

      {/* The Gachapon Machine (扭蛋机) */}
      <AnimatePresence mode="wait">
        {!isOpening && !isRevealed && (
          <motion.div
            key="gachapon"
            className="relative cursor-pointer select-none"
            onClick={isIdle ? onOpen : undefined}
            animate={
              isShaking
                ? {
                    rotate: [0, -5, 5, -8, 8, -12, 12, -6, 6, -3, 3, 0],
                    scale: [1, 1.02, 0.98, 1.03, 0.97, 1.04, 0.98, 1],
                  }
                : {}
            }
            transition={isShaking ? { duration: 0.12, repeat: 11, ease: 'easeInOut' } : {}}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.4 } }}
          >
            {/* Machine body — claymorphism style */}
            <div
              className="relative w-56 h-60 flex flex-col items-center justify-center"
              style={{
                borderRadius: '36px',
                background: 'linear-gradient(180deg, #FFF 0%, #FFF5ED 40%, #FFECD2 100%)',
                boxShadow: `
                  8px 8px 24px rgba(180, 140, 100, 0.18),
                  -8px -8px 24px rgba(255, 255, 255, 0.95),
                  inset 2px 2px 4px rgba(255, 255, 255, 0.9),
                  inset -2px -2px 4px rgba(180, 140, 100, 0.08),
                  0 2px 12px rgba(255, 107, 53, 0.08)
                `,
                border: '3px solid rgba(255, 179, 71, 0.3)',
              }}
            >
              {/* Top dome — the capsule reservoir */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20"
                style={{
                  borderRadius: '100px 100px 0 0',
                  background: 'linear-gradient(180deg, rgba(255,217,61,0.15) 0%, rgba(255,143,171,0.08) 60%, transparent 100%)',
                  borderBottom: '2px dashed rgba(255,179,71,0.3)',
                  top: -1,
                }}
              >
                {/* Tiny capsules visible in the dome */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: 12 + Math.sin(i) * 4,
                      height: 16 + Math.cos(i) * 4,
                      background: CAPSULE_COLORS[i].bg,
                      boxShadow: `0 2px 4px rgba(0,0,0,0.1)`,
                      left: `${15 + i * 18}%`,
                      top: `${15 + Math.sin(i * 2) * 20}%`,
                    }}
                    animate={isShaking ? { y: [0, -3, 1, -2, 0] } : { y: [0, -1, 0] }}
                    transition={{ duration: isShaking ? 0.3 : 2, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>

              {/* Main window — shows the "?" */}
              <div
                className="relative w-36 h-36 flex items-center justify-center"
                style={{
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 50% 40%, #FFFFFF 0%, #FFF8F0 60%, #FFECD2 100%)',
                  boxShadow: `
                    inset 2px 2px 8px rgba(255,107,53,0.08),
                    inset -2px -2px 8px rgba(255,179,71,0.08),
                    0 4px 12px rgba(180,140,100,0.1)
                  `,
                  border: '3px solid rgba(255,179,71,0.25)',
                }}
              >
                <motion.span
                  className="text-6xl font-black select-none"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    background: isShaking
                      ? 'linear-gradient(135deg, #FF6B35, #FF8FAB, #FFB347, #2EC4B6)'
                      : 'linear-gradient(135deg, #FF6B35 0%, #FFB347 100%)',
                    backgroundSize: isShaking ? '300% 300%' : '100% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: isShaking ? 'gradient-shift 0.8s ease infinite' : 'none',
                    filter: isShaking ? 'drop-shadow(0 0 8px rgba(255,107,53,0.4))' : 'none',
                  }}
                  animate={isIdle ? { scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] } : {}}
                  transition={isIdle ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
                >
                  ?
                </motion.span>
              </div>

              {/* Bottom dispenser — the coin slot */}
              <div
                className="absolute bottom-3 flex items-center gap-2"
                style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'linear-gradient(180deg, rgba(255,179,71,0.1), rgba(255,107,53,0.05))',
                }}
              >
                <div className="w-3 h-3 rounded-full bg-[#FFB347]/50" />
                <div className="w-7 h-2 rounded-full bg-[#FFB347]/30" />
              </div>

              {/* Machine legs */}
              <div className="absolute -bottom-2 flex gap-16">
                <div className="w-4 h-5 rounded-b-lg" style={{ background: 'linear-gradient(180deg, #FFECD2, #F0D5B0)' }} />
                <div className="w-4 h-5 rounded-b-lg" style={{ background: 'linear-gradient(180deg, #FFECD2, #F0D5B0)' }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening burst */}
      {isOpening && (
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {CAPSULE_COLORS.map((c, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-full blur-xl"
              style={{ background: c.bg, transform: `rotate(${i * 60}deg) translateX(40px)` }}
            />
          ))}
        </motion.div>
      )}

      {/* Falling capsules during opening */}
      {isOpening && [...Array(8)].map((_, i) => {
        const color = CAPSULE_COLORS[i % CAPSULE_COLORS.length]
        return (
          <motion.div
            key={`fall-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 14 + Math.random() * 10,
              height: 20 + Math.random() * 12,
              background: color.bg,
              boxShadow: `inset 0 -2px 4px ${color.shadow}, 0 2px 6px rgba(0,0,0,0.1)`,
              top: '40%',
              left: `${40 + Math.random() * 20}%`,
            }}
            initial={{ y: -60, x: (Math.random() - 0.5) * 80, opacity: 1, rotate: 0 }}
            animate={{
              y: 200 + Math.random() * 100,
              x: (Math.random() - 0.5) * 160,
              opacity: [1, 1, 0],
              rotate: Math.random() * 360,
            }}
            transition={{ duration: 0.6 + Math.random() * 0.4, delay: i * 0.05, ease: 'easeIn' }}
          />
        )
      })}

      {/* Button */}
      {isIdle && (
        <motion.button
          className="mt-14 px-9 py-4 rounded-full text-lg font-bold text-white cursor-pointer relative overflow-hidden shadow-lg"
          style={{
            fontFamily: "'Nunito', sans-serif",
            background: 'linear-gradient(135deg, #FF6B35 0%, #FFB347 100%)',
            boxShadow: '0 4px 20px rgba(255,107,53,0.35), 0 2px 4px rgba(0,0,0,0.08)',
          }}
          whileHover={{ scale: 1.06, boxShadow: '0 6px 28px rgba(255,107,53,0.45), 0 4px 8px rgba(0,0,0,0.1)' }}
          whileTap={{ scale: 0.94 }}
          onClick={onOpen}
        >
          <Sparkles className="inline w-5 h-5 mr-2 -mt-0.5" />
          扭一个！
        </motion.button>
      )}

      {isShaking && (
        <motion.p
          className="mt-14 text-base font-semibold"
          style={{ fontFamily: "'Nunito', sans-serif", color: '#FF6B35' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          咕噜咕噜... 扭蛋转动中...
        </motion.p>
      )}

      {isOpening && (
        <motion.p
          className="mt-14 text-xl font-extrabold"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: '#FF6B35' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          🎪 啪嗒！扭蛋掉出来了！
        </motion.p>
      )}

      {isRevealed && (
        <motion.button
          className="mt-6 text-sm font-semibold underline underline-offset-4 cursor-pointer"
          style={{ color: '#FF8FAB', fontFamily: "'Nunito', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={onOpen}
        >
          再扭一个
        </motion.button>
      )}
    </div>
  )
}