import { motion } from 'framer-motion'

export default function StreakBadge({ streak }) {
  if (streak.count < 1) return null

  return (
    <motion.div
      className="flex items-center gap-1.5 font-body text-xs tracking-wide"
      style={{ color: 'var(--seal)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span style={{ fontSize: '1.1em' }}>🔥</span>
      连续 {streak.count} 天
    </motion.div>
  )
}