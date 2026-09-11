import { motion } from 'framer-motion'

const CATEGORIES = [
  '全部', '川菜', '粤菜', '湘菜', '东北菜',
  '日料', '韩料', '火锅', '烧烤', '面食',
  '小吃', '西餐', '东南亚', '快餐', '甜品', '饮品',
]

export default function CategoryChips({ selected, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {CATEGORIES.map((cat, i) => {
        const active = selected === cat
        return (
          <motion.button
            key={cat}
            className="font-body text-xs tracking-wide cursor-pointer px-3 py-1.5 whitespace-nowrap select-none font-medium"
            style={{
              background: active ? 'var(--color-brand)' : 'var(--color-surface)',
              color: active ? '#FFFFFF' : 'var(--color-dim)',
              border: active ? '1px solid var(--color-brand)' : '1px solid var(--color-border)',
              borderRadius: 8,
            }}
            whileHover={
              !active
                ? { borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }
                : {}
            }
            whileTap={{ scale: 0.97 }}
            onClick={() => onChange(cat)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.015, duration: 0.2 }}
          >
            {cat}
          </motion.button>
        )
      })}
    </div>
  )
}