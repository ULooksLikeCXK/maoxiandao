import { CATEGORIES } from '../data/foods'
import { motion } from 'framer-motion'

export default function CategoryChips({ selected, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-2 no-scrollbar max-w-full">
      {CATEGORIES.map((cat, i) => {
        const isActive = selected === cat
        return (
          <motion.button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors shrink-0
              ${isActive
                ? 'text-white shadow-lg'
                : 'text-purple-300 bg-white/5 hover:bg-white/10 border border-white/10'
              }`}
            style={isActive ? {
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              boxShadow: '0 0 15px rgba(124,58,237,0.4)',
            } : {}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
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