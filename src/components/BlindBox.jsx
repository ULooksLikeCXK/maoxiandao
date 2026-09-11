import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Gift } from 'lucide-react'

// Emojis that spin around the box during shaking
const SPIN_EMOJIS = ['🍜', '🍗', '🍕', '🍣', '🥘', '🍛', '🥟', '🍖', '🌶️', '🧋']

// Generate particles for the burst effect
function generateParticles(count = 12) {
  const particles = []
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5
    const distance = 80 + Math.random() * 120
    particles.push({
      id: i,
      tx: Math.cos(angle) * distance,
      ty: Math.sin(angle) * distance,
      delay: Math.random() * 0.3,
      size: 4 + Math.random() * 8,
      color: ['#7c3aed', '#ec4899', '#f59e0b', '#a78bfa', '#fbbf24'][Math.floor(Math.random() * 5)],
    })
  }
  return particles
}

export default function BlindBox({ phase, onOpen, onRevealed }) {
  const isIdle = phase === 'idle'
  const isShaking = phase === 'shaking'
  const isOpening = phase === 'opening'
  const isRevealed = phase === 'revealed'

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[420px]">
      {/* Ambient glow behind the box */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
        animate={{
          background: isShaking
            ? ['rgba(124,58,237,0.4)', 'rgba(236,72,153,0.6)', 'rgba(245,158,11,0.4)', 'rgba(124,58,237,0.6)']
            : isOpening
              ? 'rgba(245,158,11,0.8)'
              : ['rgba(124,58,237,0.2)', 'rgba(236,72,153,0.3)', 'rgba(124,58,237,0.2)'],
          scale: isOpening ? 2.5 : isShaking ? [1, 1.3, 1] : [1, 1.1, 1],
        }}
        transition={{
          background: isShaking ? { duration: 0.2, repeat: 7 } : isOpening ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          scale: isShaking ? { duration: 0.2, repeat: 7 } : isOpening ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Particles emitted during shaking */}
      {isShaking && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {generateParticles(16).map(p => (
            <motion.div
              key={p.id}
              className="absolute top-1/2 left-1/2 rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                marginLeft: -p.size / 2,
                marginTop: -p.size / 2,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: p.tx,
                y: p.ty,
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.8, delay: p.delay, ease: 'easeOut' }}
            />
          ))}
        </div>
      )}

      {/* Spinning emojis during shaking */}
      {isShaking && SPIN_EMOJIS.map((emoji, i) => {
        const angle = (Math.PI * 2 * i) / SPIN_EMOJIS.length
        const radius = 120
        return (
          <motion.span
            key={i}
            className="absolute text-2xl pointer-events-none"
            style={{ top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              x: Math.cos(angle + 0.5) * radius,
              y: Math.sin(angle + 0.5) * radius,
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1.2, 0],
              rotate: 360,
            }}
            transition={{ duration: 1.8, delay: i * 0.05, ease: 'easeInOut' }}
          >
            {emoji}
          </motion.span>
        )
      })}

      {/* The Box */}
      <AnimatePresence mode="wait">
        {!isOpening && !isRevealed && (
          <motion.div
            key="box"
            className="relative cursor-pointer select-none"
            onClick={isIdle ? onOpen : undefined}
            animate={
              isShaking
                ? {
                    x: [0, -8, 8, -12, 12, -6, 6, -3, 3, 0],
                    rotate: [0, -2, 2, -3, 3, -1, 1, 0],
                  }
                : {}
            }
            transition={isShaking ? { duration: 0.15, repeat: 9, ease: 'easeInOut' } : {}}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* Box body */}
            <div
              className="relative w-48 h-48 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(145deg, #2d1b69 0%, #4c1d95 30%, #7c3aed 60%, #6d28d9 100%)',
                boxShadow: isShaking
                  ? '0 0 60px rgba(236,72,153,0.8), 0 0 120px rgba(124,58,237,0.6), 0 4px 40px rgba(0,0,0,0.4)'
                  : '0 0 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.2), 0 4px 20px rgba(0,0,0,0.3)',
                border: '2px solid rgba(167,139,250,0.3)',
              }}
            >
              {/* Box lid (top third) */}
              <div
                className="absolute top-0 left-0 right-0 h-12 rounded-t-2xl"
                style={{
                  background: 'linear-gradient(180deg, #5b21b6 0%, #7c3aed 100%)',
                  borderBottom: '3px solid rgba(167,139,250,0.5)',
                }}
              >
                {/* Ribbon */}
                <div
                  className="absolute top-0 left-0 right-0 h-3"
                  style={{ background: 'linear-gradient(90deg, #ec4899, #f59e0b, #ec4899)' }}
                />
              </div>

              {/* Question mark */}
              <motion.span
                className="text-7xl font-black pointer-events-none relative z-10 select-none"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textShadow: '0 0 20px rgba(236,72,153,0.5)',
                  marginTop: 8,
                }}
                animate={isIdle ? { y: [0, -4, 0], scale: [1, 1.05, 1] } : {}}
                transition={isIdle ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
              >
                ?
              </motion.span>

              {/* Corner decorations */}
              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-pink-400/40" />
              <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-pink-400/40" />
            </div>

            {/* Shadow below box */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full blur-md pointer-events-none"
              style={{ background: 'rgba(0,0,0,0.4)', bottom: -16 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening burst effect */}
      {isOpening && (
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div
            className="w-32 h-32 rounded-full blur-xl"
            style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.9), rgba(236,72,153,0.6), rgba(124,58,237,0.3), transparent)' }}
          />
        </motion.div>
      )}

      {/* Button */}
      {isIdle && (
        <motion.button
          className="mt-12 px-8 py-3.5 rounded-full text-lg font-bold text-white cursor-pointer relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            boxShadow: '0 0 30px rgba(236,72,153,0.4), 0 4px 15px rgba(0,0,0,0.3)',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(236,72,153,0.6), 0 4px 20px rgba(0,0,0,0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
        >
          <Sparkles className="inline w-5 h-5 mr-2 -mt-0.5" />
          打开盲盒
        </motion.button>
      )}

      {isShaking && (
        <motion.p
          className="mt-12 text-lg text-purple-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          正在为你寻找美味...
        </motion.p>
      )}

      {isOpening && (
        <motion.p
          className="mt-12 text-xl text-yellow-300 font-bold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Gift className="inline w-5 h-5 mr-1 -mt-0.5" />
          开盒中...
        </motion.p>
      )}

      {/* Upgrade note for rare/legendary during opening */}
      {isOpening && false /* placeholder for future sound trigger */}

      {isRevealed && (
        <motion.p
          className="mt-4 text-sm text-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={onOpen}
            className="text-purple-300 hover:text-purple-200 underline underline-offset-4 transition-colors cursor-pointer"
          >
            再来一次
          </button>
        </motion.p>
      )}
    </div>
  )
}