import { CATEGORIES } from '../data/foods'
import { motion } from 'framer-motion'

export default function CategoryChips({ selected, onChange }) {
  return (
    <div
      className="flex gap-1.5 overflow-x-auto pb-1"
      style={{ scrollbarWidth: 'none' }}
    >
      {CATEGORIES.map((cat, i) => {
        const active = cat === selected
        return (
          <motion.button
            key={cat}
            className="shrink-0 px-3.5 py-1.5 text-xs cursor-pointer font-body tracking-wide"
            style={{
              background: active ? 'var(--ink)' : 'transparent',
              color: active ? 'var(--white)' : 'var(--text-dim)',
              border: active ? '1px solid var(--ink)' : '1px solid transparent',
              borderRadius: 2,
            }}
            whileHover={{ color: active ? undefined : 'var(--ink)', borderColor: active ? undefined : 'var(--rule)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onChange(cat)}
          >
            {cat}
          </motion.button>
        )
      })}
    </div>
  )
}