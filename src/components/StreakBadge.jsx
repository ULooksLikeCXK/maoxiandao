import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function StreakBadge({ streak }) {
  const { count } = streak
  if (count < 1) return null

  return (
    <motion.div
      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
      style={{
        background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.15))',
        border: '1px solid rgba(245,158,11,0.3)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
    >
      <span className="relative">
        <Flame className="w-5 h-5 text-orange-400" />
        <motion.span
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-400"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </span>
      <span className="text-orange-300">
        连续打卡 <span className="text-orange-400 text-base">{count}</span> 天
      </span>
    </motion.div>
  )
}