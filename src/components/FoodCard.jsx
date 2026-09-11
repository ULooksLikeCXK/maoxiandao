import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

export default function FoodCard({ food, rarityConfig, onReset }) {
  if (!food) return null

  const isLegendary = food.rarity === 'legendary'
  const isRare = food.rarity === 'rare'

  return (
    <div className="flex flex-col items-center max-w-xs mx-auto">
      {/* Food emoji — hero */}
      <motion.span
        className="text-7xl select-none"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.1 }}
      >
        {food.emoji}
      </motion.span>

      {/* Food name — seal stamp style */}
      <motion.h2
        className="font-display text-2xl font-bold mt-6 text-center leading-tight tracking-wide"
        style={{
          color: 'var(--ink)',
          border: isLegendary ? '3px solid var(--seal)' : 'none',
          padding: isLegendary ? '8px 24px' : '0',
          display: isLegendary ? 'inline-block' : 'block',
          transform: isLegendary ? 'rotate(-0.5deg)' : 'none',
        }}
        initial={isLegendary ? { scale: 3, rotate: -12, opacity: 0 } : { opacity: 0, y: 12 }}
        animate={isLegendary
          ? { scale: 1, rotate: -0.5, opacity: 0.92 }
          : { opacity: 1, y: 0 }
        }
        transition={isLegendary
          ? { type: 'spring', stiffness: 180, damping: 14, delay: 0.15 }
          : { delay: 0.2 }
        }
      >
        {food.name}
      </motion.h2>

      {/* Category + rarity hint — inline, minimal */}
      <motion.div
        className="flex items-center gap-2 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="font-body text-xs tracking-widest" style={{ color: 'var(--text-dim)' }}>
          {food.category}
        </span>
        {isRare && (
          <span className="font-body text-xs" style={{ color: 'var(--gold)' }}>· 稀有</span>
        )}
        {isLegendary && (
          <span className="font-body text-xs font-bold" style={{ color: 'var(--seal)' }}>· 传说</span>
        )}
      </motion.div>

      {/* Description — quiet */}
      <motion.p
        className="font-body text-sm mt-4 text-center leading-relaxed max-w-xs"
        style={{ color: 'var(--text-dim)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        {food.description}
      </motion.p>

      {/* Actions */}
      <motion.div
        className="flex items-center gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <motion.button
          className="font-body text-sm cursor-pointer flex items-center gap-1.5"
          style={{ color: 'var(--text-dim)' }}
          whileHover={{ color: 'var(--ink)' }}
          onClick={onReset}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          换一个
        </motion.button>
        <motion.button
          className="font-body text-sm px-8 py-3 cursor-pointer"
          style={{
            background: 'var(--ink)',
            color: 'var(--white)',
            borderRadius: 2,
          }}
          whileHover={{ background: '#333' }}
          whileTap={{ scale: 0.97 }}
          onClick={onReset}
        >
          就吃这个
        </motion.button>
      </motion.div>

      {/* Daily fortune-style closing line */}
      <motion.p
        className="font-display text-xs mt-8 tracking-widest"
        style={{ color: 'var(--text-dim)', opacity: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6 }}
      >
        — 今日宜食 —
      </motion.p>
    </div>
  )
}