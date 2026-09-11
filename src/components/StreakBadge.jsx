import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function StreakBadge({ streak }) {
  if (streak.count < 1) return null

  return (
    <motion.div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
      style={{
        background: 'rgba(232,87,58,0.06)',
        border: '1.5px solid rgba(232,87,58,0.12)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Flame className="w-4 h-4" style={{ color: '#E8573A' }} />
      <span className="text-xs font-semibold" style={{ color: '#E8573A' }}>
        {streak.count} 天
      </span>
    </motion.div>
  )
}