import { motion } from 'framer-motion'
import { Sparkles, Star, Zap, ChefHat } from 'lucide-react'

const RARITY_BADGE = {
  common: { icon: null, label: '', bg: 'transparent', text: '', border: 'transparent' },
  rare: { icon: Star, label: '稀有菜品！', bg: 'rgba(255,179,71,0.12)', text: '#E69A30', border: 'rgba(255,179,71,0.3)' },
  legendary: { icon: Zap, label: '🏆 传说级美味！', bg: 'rgba(255,107,53,0.12)', text: '#FF6B35', border: 'rgba(255,107,53,0.35)' },
}

export default function FoodCard({ food, rarityConfig, onReset }) {
  if (!food) return null

  const badge = RARITY_BADGE[food.rarity]

  return (
    <motion.div
      className="flex flex-col items-center gap-4 px-7 py-9 max-w-xs mx-auto text-center"
      style={{
        borderRadius: '32px',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #FFF8F0 100%)',
        boxShadow: `
          8px 8px 24px rgba(180, 140, 100, 0.15),
          -6px -6px 20px rgba(255, 255, 255, 0.95),
          inset 1px 1px 3px rgba(255,255,255,0.8),
          inset -1px -1px 3px rgba(180,140,100,0.06)
        `,
        border: '2px solid rgba(255,179,71,0.2)',
      }}
      initial={{ scale: 0, opacity: 0, y: 30, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.05 }}
    >
      {/* Capsule shell — like it just cracked open */}
      <motion.div
        className="relative"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        {/* Split capsule halves */}
        <motion.div
          className="absolute -top-3 -left-4 w-10 h-7"
          style={{
            borderRadius: '20px 20px 0 0',
            background: 'linear-gradient(180deg, #FF8FAB, #FFC2D1)',
            boxShadow: '0 2px 6px rgba(255,143,171,0.2)',
          }}
          animate={{ y: [0, -15, -30, -40], x: [0, -5, -12, -18], rotate: [0, 5, 15, 25], opacity: [1, 1, 0.8, 0] }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.div
          className="absolute -top-3 -right-4 w-10 h-7"
          style={{
            borderRadius: '20px 20px 0 0',
            background: 'linear-gradient(180deg, #80FFDB, #B8FFEC)',
            boxShadow: '0 2px 6px rgba(128,255,219,0.2)',
          }}
          animate={{ y: [0, -15, -30, -38], x: [0, 5, 12, 20], rotate: [0, -5, -15, -30], opacity: [1, 1, 0.8, 0] }}
          transition={{ duration: 0.8, delay: 0.55 }}
        />

        {/* Food emoji — hero of the card */}
        <motion.span
          className="text-7xl select-none block"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(255,107,53,0.15))' }}
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 0.15 }}
        >
          {food.emoji}
        </motion.span>
      </motion.div>

      {/* Rarity badge */}
      {badge.icon && (
        <motion.div
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold"
          style={{
            background: badge.bg,
            color: badge.text,
            border: `1.5px solid ${badge.border}`,
            fontFamily: "'Nunito', sans-serif",
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', delay: 0.3 }}
        >
          <badge.icon className="w-3.5 h-3.5" />
          {badge.label}
        </motion.div>
      )}

      {/* Food name */}
      <motion.h2
        className="text-2xl font-extrabold leading-tight"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          color: '#2D1B0E',
        }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        {food.name}
      </motion.h2>

      {/* Category tag */}
      <motion.span
        className="px-3.5 py-1.5 rounded-full text-xs font-bold"
        style={{
          background: 'rgba(46,196,182,0.12)',
          color: '#2EC4B6',
          border: '1.5px solid rgba(46,196,182,0.25)',
          fontFamily: "'Nunito', sans-serif",
        }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {food.category}
      </motion.span>

      {/* Description */}
      <motion.p
        className="text-sm leading-relaxed max-w-xs"
        style={{ color: '#8B6F5C', fontFamily: "'Nunito', sans-serif" }}
        initial={{ opacity: 0, y: 8 }}
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
            className="px-2.5 py-1 rounded-lg text-xs font-semibold"
            style={{
              background: 'rgba(255,179,71,0.1)',
              color: '#E69A30',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            #{tag}
          </span>
        ))}
      </motion.div>

      {/* CTA button */}
      <motion.button
        className="mt-5 px-10 py-3.5 rounded-full text-base font-extrabold text-white cursor-pointer shadow-lg"
        style={{
          fontFamily: "'Nunito', sans-serif",
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8FAB 100%)',
          boxShadow: '0 4px 20px rgba(255,107,53,0.3), 0 2px 4px rgba(0,0,0,0.06)',
        }}
        whileHover={{ scale: 1.06, boxShadow: '0 6px 28px rgba(255,107,53,0.4), 0 4px 8px rgba(0,0,0,0.08)' }}
        whileTap={{ scale: 0.94 }}
        onClick={onReset}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <ChefHat className="inline w-4 h-4 mr-1.5 -mt-0.5" />
        就吃这个！
      </motion.button>
    </motion.div>
  )
}