import { motion } from 'framer-motion'

const STAMP = '0 5px 0 rgba(114, 83, 73, 0.16)'
const STAMP_HOVER = '0 7px 0 rgba(114, 83, 73, 0.16)'
const STAMP_PRESS = '0 1px 0 rgba(114, 83, 73, 0.16)'

export default function FoodCard({ food, rarityConfig, onReset }) {
  if (!food) return null

  return (
    <motion.div
      className="flex flex-col items-center gap-5 text-center w-full max-w-sm px-4"
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
    >
      {/* Emoji on a capsule medallion */}
      <motion.div
        className="flex items-center justify-center select-none"
        style={{
          width: 168, height: 168,
          borderRadius: '50%',
          background: 'var(--color-muted)',
          boxShadow: 'inset 0 0 0 5px var(--color-ink), 0 6px 0 rgba(114, 83, 73, 0.14)',
        }}
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.06 }}
      >
        <span className="leading-none" style={{ fontSize: '5.5rem' }}>{food.emoji}</span>
      </motion.div>

      {/* Name */}
      <motion.h2
        className="font-black text-3xl tracking-wide"
        style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.3 }}
      >
        {food.name}
      </motion.h2>

      {/* Category + rarity */}
      <motion.div
        className="flex items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28 }}
      >
        <span
          className="font-body text-sm font-bold tracking-wide px-4 py-1.5"
          style={{
            background: 'var(--color-muted)',
            color: 'var(--color-ink)',
            borderRadius: 999,
            border: '2px solid var(--color-border)',
          }}
        >
          {food.category}
        </span>
        {rarityConfig && (
          <span className="font-body text-sm font-bold tracking-wide" style={{ color: 'var(--color-brand)' }}>
            {rarityConfig.label}
          </span>
        )}
      </motion.div>

      {/* Description */}
      <motion.p
        className="font-body text-sm font-medium leading-relaxed max-w-xs"
        style={{ color: 'var(--color-dim)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.36 }}
      >
        {food.description}
      </motion.p>

      {/* Actions — gachago-style press-down buttons */}
      <motion.div
        className="flex items-center gap-4 mt-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.46 }}
      >
        <motion.button
          className="font-body text-base font-black tracking-wide cursor-pointer px-7 py-3"
          style={{
            background: 'var(--color-surface)',
            color: 'var(--color-ink)',
            border: '4px solid var(--color-ink)',
            borderRadius: 999,
            boxShadow: STAMP,
          }}
          whileHover={{ y: -2, boxShadow: STAMP_HOVER }}
          whileTap={{ y: 4, boxShadow: STAMP_PRESS }}
          onClick={onReset}
        >
          换一个
        </motion.button>

        <motion.button
          className="font-body text-base font-black tracking-wide cursor-pointer px-8 py-3"
          style={{
            background: 'var(--color-brand)',
            color: '#FFFFFF',
            border: '4px solid var(--color-ink)',
            borderRadius: 999,
            boxShadow: STAMP,
          }}
          whileHover={{ y: -2, background: 'var(--color-brand-deep)', boxShadow: STAMP_HOVER }}
          whileTap={{ y: 4, boxShadow: STAMP_PRESS }}
        >
          就吃这个 ❤
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
