import { motion } from 'framer-motion'

const CATEGORIES = [
  '全部', '川菜', '粤菜', '湘菜', '东北菜',
  '日料', '韩料', '火锅', '烧烤', '面食',
  '小吃', '西餐', '东南亚', '快餐', '甜品', '饮品',
]

export default function CategoryChips({ selected, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {CATEGORIES.map((cat, i) => {
        const active = selected === cat
        return (
          <motion.button
            key={cat}
            className="font-body text-sm font-bold tracking-wide cursor-pointer px-4 py-2 whitespace-nowrap select-none"
            style={{
              background: active ? 'var(--color-brand)' : 'var(--color-muted)',
              color: active ? '#FFFFFF' : 'var(--color-ink)',
              border: active ? '3px solid var(--color-ink)' : '3px solid var(--color-border)',
              borderRadius: 999,
              boxShadow: active ? '0 3px 0 rgba(114, 83, 73, 0.20)' : 'none',
            }}
            whileHover={!active ? { background: 'var(--color-border)' } : {}}
            whileTap={{ scale: 0.94 }}
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
