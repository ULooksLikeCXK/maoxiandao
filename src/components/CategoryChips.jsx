import { CATEGORIES } from '../data/foods'
import { motion } from 'framer-motion'

export default function CategoryChips({ selected, onChange }) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-3 px-1 no-scrollbar max-w-full"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {CATEGORIES.map((cat, i) => {
        const isActive = selected === cat
        return (
          <motion.button
            key={cat}
            className="shrink-0 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap cursor-pointer transition-all"
            style={{
              fontFamily: "'Nunito', sans-serif",
              background: isActive
                ? 'linear-gradient(135deg, #FF6B35, #FFB347)'
                : '#FFFFFF',
              color: isActive ? '#FFFFFF' : '#8B6F5C',
              border: isActive ? '2px solid transparent' : '2px solid #F0E4D0',
              boxShadow: isActive
                ? '0 3px 12px rgba(255,107,53,0.25), 0 1px 3px rgba(0,0,0,0.06)'
                : '0 1px 3px rgba(0,0,0,0.03)',
            }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02 }}
            onClick={() => onChange(cat)}
          >
            {cat}
          </motion.button>
        )
      })}
    </div>
  )
}