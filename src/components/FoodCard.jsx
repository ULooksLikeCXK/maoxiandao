import { motion } from 'framer-motion'
import { ChefHat, Star, Zap, RefreshCw } from 'lucide-react'

const RARITY_STYLE = {
  common: { badge: '', bg: '#F9FAFB', border: '#E5E7EB', text: '#6B7280' },
  rare: { badge: '稀有', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)', text: '#D97706' },
  legendary: { badge: '传说', bg: 'rgba(232,87,58,0.06)', border: 'rgba(232,87,58,0.25)', text: '#E8573A' },
}

export default function FoodCard({ food, rarityConfig, onReset }) {
  if (!food) return null
  const style = RARITY_STYLE[food.rarity]

  return (
    <motion.div
      className="w-full max-w-sm mx-auto shadow-card"
      style={{
        borderRadius: 24,
        background: '#FFFFFF',
        border: '1.5px solid rgba(0,0,0,0.05)',
        overflow: 'hidden',
      }}
      initial={{ scale: 0.9, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Top accent bar */}
      <div
        className="h-1.5"
        style={{
          background: food.rarity === 'legendary'
            ? 'linear-gradient(90deg, #E8573A, #F59E0B, #E8573A)'
            : food.rarity === 'rare'
              ? 'linear-gradient(90deg, #F59E0B, #FBBF24)'
              : 'linear-gradient(90deg, #E8573A, #f06a55)',
        }}
      />

      <div className="flex flex-col items-center gap-3 px-8 py-8 text-center">
        {/* Food emoji — the hero */}
        <motion.div
          className="w-24 h-24 flex items-center justify-center"
          style={{
            borderRadius: '50%',
            background: 'linear-gradient(160deg, #FDF8F3, #FBF7F2)',
            border: '1px solid rgba(0,0,0,0.04)',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 250, damping: 16, delay: 0.1 }}
        >
          <span className="text-5xl select-none">{food.emoji}</span>
        </motion.div>

        {/* Rarity badge */}
        {food.rarity !== 'common' && (
          <motion.span
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: style.bg, color: style.text, border: `1px solid ${style.border}` }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {food.rarity === 'legendary' ? <Zap className="w-3 h-3" /> : <Star className="w-3 h-3" />}
            {style.badge}
          </motion.span>
        )}

        {/* Food name */}
        <motion.h2
          className="text-2xl font-bold tracking-tight"
          style={{ color: '#1A1A2E' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {food.name}
        </motion.h2>

        {/* Category */}
        <motion.span
          className="inline-block px-3 py-1 rounded-full text-xs font-medium"
          style={{ background: 'rgba(8,145,178,0.06)', color: '#0891B2', border: '1px solid rgba(8,145,178,0.12)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {food.category}
        </motion.span>

        {/* Description */}
        <motion.p
          className="text-sm leading-relaxed max-w-xs"
          style={{ color: '#6B7280' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          {food.description}
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex gap-1.5 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {food.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{ background: 'rgba(0,0,0,0.03)', color: '#9CA3AF' }}
            >
              #{tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom actions */}
      <div
        className="flex border-t"
        style={{ borderColor: 'rgba(0,0,0,0.04)' }}
      >
        <motion.button
          className="flex-1 py-4 text-sm font-semibold cursor-pointer flex items-center justify-center gap-2"
          style={{ color: '#1A1A2E', background: 'rgba(0,0,0,0.01)' }}
          whileHover={{ background: 'rgba(0,0,0,0.03)' }}
          whileTap={{ scale: 0.98 }}
          onClick={onReset}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <RefreshCw className="w-4 h-4" />
          换一个
        </motion.button>
        <motion.button
          className="flex-1 py-4 text-sm font-semibold text-white cursor-pointer flex items-center justify-center gap-2"
          style={{ background: '#1A1A2E' }}
          whileHover={{ background: '#2D2D44' }}
          whileTap={{ scale: 0.98 }}
          onClick={onReset}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <ChefHat className="w-4 h-4" />
          就吃这个
        </motion.button>
      </div>
    </motion.div>
  )
}