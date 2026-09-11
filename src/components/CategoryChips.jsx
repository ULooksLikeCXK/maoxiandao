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
            className="font-body text-xs tracking-wider cursor-pointer px-3.5 py-1.5 whitespace-nowrap select-none font-medium"
            style={{
              background: active ? 'var(--color-brand)' : 'transparent',
              color: active ? '#FFFFFF' : 'var(--color-dim)',
              border: active
                ? '2px solid var(--color-brand)'
                : '2px solid var(--color-border)',
              borderRadius: 6,
            }}
            whileHover={
              !active
                ? { borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }
                : {}
            }
            whileTap={{ scale: 0.96 }}
            onClick={() => onChange(cat)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02, duration: 0.25 }}
          >
            {cat}
          </motion.button>
        )
      })}
    </div>
  )
}