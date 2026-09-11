import { motion } from 'framer-motion'

export default function FoodCard({ food, rarityConfig, onReset }) {
  if (!food) return null

  return (
    <motion.div
      className="flex flex-col items-center gap-5 text-center w-full max-w-sm px-4"
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
    >
      {/* Emoji on a bounty-coin — gold ring on parchment */}
      <motion.div
        className="flex items-center justify-center select-none relative"
        style={{
          width: 170, height: 170,
          borderRadius: '50%',
          background: 'var(--color-surface)',
          border: '5px solid var(--color-gold)',
          boxShadow: 'inset 0 0 0 6px var(--color-muted), 0 6px 0 rgba(255,143,0,0.25)',
        }}
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.06 }}
      >
        {/* compass rose cross-hairs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, transparent calc(50% - 1px), var(--color-muted) calc(50% - 1px), var(--color-muted) calc(50% + 1px), transparent calc(50% + 1px)),
              linear-gradient(to bottom, transparent calc(50% - 1px), var(--color-muted) calc(50% - 1px), var(--color-muted) calc(50% + 1px), transparent calc(50% + 1px))
            `,
            borderRadius: '50%',
          }}
        />
        <span className="leading-none relative z-10" style={{ fontSize: '5.5rem' }}>{food.emoji}</span>
      </motion.div>

      {/* Name — pirate crew banner */}
      <motion.h2
        className="font-black text-3xl tracking-wide"
        style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.3 }}
      >
        {food.name}
      </motion.h2>

      {/* Category + rarity badges */}
      <motion.div
        className="flex items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28 }}
      >
        <span
          className="font-body text-sm font-bold tracking-wide px-4 py-1.5"
          style={{
            background: 'var(--color-ocean)',
            color: '#FFFFFF',
            borderRadius: 999,
            border: '2px solid var(--color-ink)',
          }}
        >
          {food.category}
        </span>
        {rarityConfig && (
          <span className="font-body text-sm font-black tracking-wide" style={{ color: 'var(--color-gold)' }}>
            {rarityConfig.label}
          </span>
        )}
      </motion.div>

      {/* Description — aged scroll note */}
      <motion.p
        className="font-body text-sm font-medium leading-relaxed max-w-xs"
        style={{
          color: 'var(--color-dim)',
          borderLeft: '3px solid var(--color-gold)',
          paddingLeft: 10,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.36 }}
      >
        {food.description}
      </motion.p>

      {/* Actions — treasure buttons */}
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
            boxShadow: '0 4px 0 rgba(62, 39, 35, 0.18)',
          }}
          whileHover={{ y: -2, boxShadow: '0 6px 0 rgba(62, 39, 35, 0.18)' }}
          whileTap={{ y: 4, boxShadow: '0 1px 0 rgba(62, 39, 35, 0.18)' }}
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
            boxShadow: '0 4px 0 rgba(198, 40, 40, 0.30)',
          }}
          whileHover={{ y: -2, background: '#8E0000', boxShadow: '0 6px 0 rgba(198, 40, 40, 0.30)' }}
          whileTap={{ y: 4, boxShadow: '0 1px 0 rgba(198, 40, 40, 0.30)' }}
        >
          就吃这个 ⚓
        </motion.button>
      </motion.div>
    </motion.div>
  )
}