import { motion } from 'framer-motion'

const FRUIT_SIZE = 270

export default function DevilFruit({ phase, onOpen }) {
  const isIdle = phase === 'idle'
  const isShaking = phase === 'shaking'
  const isOpening = phase === 'opening'
  const isRevealed = phase === 'revealed'

  if (isRevealed) return null

  return (
    <div className="flex flex-col items-center gap-6">
      {/* === Main stage: Chopper (left) + Sanji holding bowl (center) + Devil Fruit on bowl === */}
      <div className="relative flex items-end justify-center" style={{ width: 1360, height: 1080 }}>

        {/* Chopper — left side */}
        <motion.div
          className="absolute select-none pointer-events-none"
          style={{ left: -10, bottom: 20, zIndex: 2 }}
          animate={isShaking ? { y: [0, -10, 0, -6, 0], rotate: [0, -3, 3, -2, 0] } : {}}
          transition={isShaking ? { duration: 0.6, repeat: Infinity, ease: 'easeInOut' } : {}}
        >
          <motion.img
            src="/maoxiandao/chopper.png"
            alt="乔巴"
            style={{ width: 320, height: 'auto', filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.25))' }}
            animate={isIdle ? { y: [0, -5, 0] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Sanji — centered, holding the bowl */}
        <motion.div
          className="absolute select-none pointer-events-none"
          style={{ bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
        >
          <img
            src="/maoxiandao/sanji.png"
            alt="山治"
            style={{ width: 1360, height: 'auto', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25))' }}
          />
        </motion.div>

        {/* === DEVIL FRUIT — on top of Sanji's bowl === */}
        <motion.button
          className="absolute cursor-pointer select-none outline-none bg-transparent border-none p-0"
          style={{
            width: FRUIT_SIZE + 16,
            height: FRUIT_SIZE + 16,
            zIndex: 5,
            left: '50%',
            marginLeft: -(FRUIT_SIZE + 16) / 2,
            top: 600, /* adjust vertical position over bowl */
          }}
          animate={
            isShaking
              ? { rotate: [-4, 4, -6, 6, -5, 5, -3, 0] }
              : isOpening
              ? { scale: [1, 1.12, 1.04] }
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
          whileHover={isIdle ? { scale: 1.08 } : {}}
          whileTap={isIdle ? { scale: 0.93 } : {}}
        >
          {/* glow ring — idle */}
          {isIdle && (
            <div
              className="absolute inset-0 pointer-events-none animate-fruit-glow"
              style={{ borderRadius: '50%' }}
            />
          )}

          {/* real devil fruit image */}
          <motion.img
            src="/maoxiandao/devil-fruit.png"
            alt="恶魔果实"
            style={{
              position: 'absolute',
              top: -4,
              left: -4,
              width: FRUIT_SIZE + 24,
              height: 'auto',
              filter: 'drop-shadow(0 6px 16px rgba(74,20,140,0.50))',
            }}
            className={isIdle ? 'animate-float' : ''}
            animate={
              isShaking
                ? { rotate: [0, 60, 120, 180, 240, 300, 360] }
                : isOpening
                ? { rotate: [0, 360], scale: [1, 1.15, 1.02] }
                : {}
            }
            transition={
              isShaking
                ? { duration: 2, ease: 'linear', repeat: Infinity }
                : isOpening
                ? { duration: 0.5, ease: 'easeOut' }
                : {}
            }
          />

          {/* sparkles on shake */}
          {isShaking && (
            <motion.div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.3, 0.8, 0], scale: [1, 1.2, 1.05, 1.2, 1] }}
              transition={{ duration: 1.5 }}
            >
              <span style={{ fontSize: '3rem' }}>💥</span>
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
                  width: 140, height: 140, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(156,39,176,0.5) 0%, rgba(156,39,176,0) 70%)',
                }}
              />
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* hint text */}
      {isIdle && (
        <p className="font-body text-base font-bold tracking-wide text-center" style={{ color: 'var(--color-dim)' }}>
          恶魔果实藏着什么力量？点一下揭晓
        </p>
      )}
      {isShaking && (
        <p className="font-body text-base font-bold tracking-wide" style={{ color: 'var(--color-brand)' }}>
          果实正在觉醒…
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