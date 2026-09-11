import { motion } from 'framer-motion'

export default function FoodCard({ food, rarityConfig, onReset }) {
  if (!food) return null

  return (
    <motion.div
      className="flex flex-col items-center gap-5 text-center w-full max-w-sm px-4"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      {/* Emoji */}
      <motion.span
        className="select-none leading-none"
        style={{ fontSize: '6.5rem' }}
        initial={{ scale: 0, rotate: -12 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.05 }}
      >
        {food.emoji}
      </motion.span>

      {/* Name */}
      <motion.h2
        className="font-bold text-3xl tracking-wide"
        style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
      >
        {food.name}
      </motion.h2>

      {/* Category + rarity */}
      <motion.div
        className="flex items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <span
          className="font-body text-xs tracking-wider px-2.5 py-1 font-medium"
          style={{
            background: 'var(--color-muted)',
            color: 'var(--color-brand)',
            borderRadius: 6,
          }}
        >
          {food.category}
        </span>
        {rarityConfig && (
          <span
            className="font-body text-xs tracking-wide"
            style={{ color: 'var(--color-dim)' }}
          >
            {rarityConfig.label}
          </span>
        )}
      </motion.div>

      {/* Description */}
      <motion.p
        className="font-body text-sm leading-relaxed max-w-xs"
        style={{ color: 'var(--color-dim)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        {food.description}
      </motion.p>

      {/* Actions */}
      <motion.div
        className="flex items-center gap-5 mt-2"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <motion.button
          className="font-body text-sm tracking-wide cursor-pointer bg-transparent border-none px-2 py-1.5"
          style={{ color: 'var(--color-dim)' }}
          whileHover={{ color: 'var(--color-ink)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onReset}
        >
          换一个
        </motion.button>

        <motion.button
          className="font-body text-sm font-semibold tracking-wide cursor-pointer px-8 py-3 border-none"
          style={{
            background: 'var(--color-brand)',
            color: '#FFFFFF',
            borderRadius: 10,
          }}
          whileHover={{ background: 'var(--color-brand-deep)', scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          就吃这个
        </motion.button>
      </motion.div>
    </motion.div>
  )
}