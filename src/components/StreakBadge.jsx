import { motion } from 'framer-motion'

export default function StreakBadge({ streak }) {
  const count = Math.max(0, streak || 0)
  const active = count > 0

  return (
    <motion.div
      className="flex items-center gap-1.5 font-body text-xs font-black tracking-wide px-4 py-2 select-none"
      style={{
        background: active ? 'var(--color-gold)' : 'var(--color-muted)',
        color: active ? 'var(--color-surface)' : 'var(--color-ink)',
        border: `3px solid ${active ? 'var(--color-ink)' : 'var(--color-border)'}`,
        borderRadius: 999,
        boxShadow: active ? '0 3px 0 rgba(62, 39, 35, 0.20)' : 'none',
      }}
      whileHover={active ? { scale: 1.05 } : {}}
    >
      <span className="text-base">{active ? '💰' : '⚓'}</span>
      <span>悬赏 {count} 天</span>
    </motion.div>
  )
}