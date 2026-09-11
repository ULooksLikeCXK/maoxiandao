import { motion } from 'framer-motion'
import { Sparkles, Star, Zap } from 'lucide-react'

const RARITY_BADGE = {
  common: { icon: null, label: '', className: '' },
  rare: { icon: Star, label: '稀有', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  legendary: { icon: Zap, label: '传说', className: 'bg-amber-500/20 text-amber-400 border-amber-500/30 animate-pulse' },
}

export default function FoodCard({ food, rarityConfig, onReset }) {
  if (!food) return null

  const badge = RARITY_BADGE[food.rarity]

  return (
    <motion.div
      className="flex flex-col items-center gap-3 px-6 py-8 rounded-2xl max-w-sm mx-auto"
      style={{
        background: 'linear-gradient(145deg, rgba(26,16,40,0.95), rgba(40,20,60,0.9))',
        border: '1px solid rgba(167,139,250,0.25)',
        boxShadow: '0 0 40px rgba(124,58,237,0.25), 0 8px 32px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(20px)',
      }}
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
    >
      {/* Rarity badge */}
      {badge.icon && (
        <motion.div
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${badge.className}`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', delay: 0.3 }}
        >
          <badge.icon className="w-3 h-3" />
          {badge.label}
        </motion.div>
      )}

      {/* Food emoji */}
      <motion.span
        className="text-7xl select-none"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
        style={{ filter: 'drop-shadow(0 0 20px rgba(245,158,11,0.4))' }}
      >
        {food.emoji}
      </motion.span>

      {/* Food name */}
      <motion.h2
        className="text-2xl font-extrabold text-center"
        style={{
          background: food.rarity === 'legendary'
            ? 'linear-gradient(135deg, #f59e0b, #fbbf24, #fcd34d)'
            : 'linear-gradient(135deg, #e9d5ff, #c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        {food.name}
      </motion.h2>

      {/* Category tag */}
      <motion.span
        className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {food.category}
      </motion.span>

      {/* Description */}
      <motion.p
        className="text-sm text-purple-300/80 text-center leading-relaxed max-w-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {food.description}
      </motion.p>

      {/* Tags */}
      <motion.div
        className="flex gap-2 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {food.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-purple-400"
          >
            #{tag}
          </span>
        ))}
      </motion.div>

      {/* Action button */}
      <motion.button
        className="mt-4 px-8 py-3 rounded-full text-base font-bold text-white cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          boxShadow: '0 0 20px rgba(236,72,153,0.3)',
        }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236,72,153,0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Sparkles className="inline w-4 h-4 mr-1 -mt-0.5" />
        就吃这个！
      </motion.button>
    </motion.div>
  )
}