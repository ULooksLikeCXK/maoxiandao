import { motion } from 'framer-motion'

export default function FoodCard({ food, rarityConfig, onReset }) {
  if (!food) return null

  const isLegendary = food.rarity === 'legendary'
  const isRare = food.rarity === 'rare'

  return (
    <motion.div
      className="flex flex-col items-center gap-5 text-center w-full max-w-sm px-4"
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
    >
      {/* ── Emoji hero ── */}
      <motion.span
        className="select-none leading-none"
        style={{ fontSize: '6.5rem' }}
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 14,
          delay: 0.08,
        }}
      >
        {food.emoji}
      </motion.span>

      {/* ── Food name ── */}
      <motion.h2
        className="font-bold text-3xl tracking-wide"
        style={{
          color: isLegendary ? 'var(--color-accent)' : 'var(--color-ink)',
          fontFamily: 'var(--font-body)',
        }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {food.name}
      </motion.h2>

      {/* ── Category badge + rarity ── */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span
          className="font-body text-xs tracking-wider px-3 py-1"
          style={{
            background: isLegendary ? 'rgba(234, 88, 12, 0.1)' : 'var(--color-muted)',
            color: isLegendary ? 'var(--color-accent)' : 'var(--color-brand)',
            borderRadius: 5,
            border: `1px solid ${isLegendary ? 'rgba(234,88,12,0.25)' : 'var(--color-border)'}`,
            fontWeight: 600,
          }}
        >
          {food.category}
        </span>
        {rarityConfig && (
          <span
            className="font-body text-xs tracking-wider font-medium"
            style={{ color: isRare ? 'var(--color-brand)' : isLegendary ? 'var(--color-accent)' : 'var(--color-dim)' }}
          >
            {rarityConfig.label}
          </span>
        )}
      </motion.div>

      {/* ── Description ── */}
      <motion.p
        className="font-body text-sm leading-relaxed max-w-xs"
        style={{ color: 'var(--color-dim)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {food.description}
      </motion.p>

      {/* ── Actions ── */}
      <motion.div
        className="flex items-center gap-6 mt-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="font-body text-sm tracking-wider cursor-pointer bg-transparent border-none px-2 py-1"
          style={{ color: 'var(--color-dim)' }}
          whileHover={{ color: 'var(--color-ink)' }}
          whileTap={{ scale: 0.96 }}
          onClick={onReset}
        >
          换一个
        </motion.button>

        <motion.button
          className="font-body text-sm font-semibold tracking-wider cursor-pointer px-8 py-3 border-none"
          style={{
            background: 'var(--color-accent)',
            color: '#FFFFFF',
            borderRadius: 8,
          }}
          whileHover={{ background: 'var(--color-accent-deep)', scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            // Visual feedback only — the user has already made their choice
          }}
        >
          就吃这个！
        </motion.button>
      </motion.div>
    </motion.div>
  )
}