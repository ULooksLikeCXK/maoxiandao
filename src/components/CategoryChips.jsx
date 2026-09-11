import { CATEGORIES } from '../data/foods'
import { motion } from 'framer-motion'

export default function CategoryChips({ selected, onChange }) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 px-1"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {CATEGORIES.map((cat, i) => {
        const active = selected === cat
        return (
          <motion.button
            key={cat}
            className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap cursor-pointer transition-colors"
            style={{
              background: active ? '#1A1A2E' : '#FFFFFF',
              color: active ? '#FFFFFF' : '#6B7280',
              border: active ? '1.5px solid #1A1A2E' : '1.5px solid rgba(0,0,0,0.06)',
              boxShadow: active ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.015 }}
            onClick={() => onChange(cat)}
          >
            {cat}
          </motion.button>
        )
      })}
    </div>
  )
}