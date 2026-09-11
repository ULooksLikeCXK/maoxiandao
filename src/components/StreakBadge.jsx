import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function StreakBadge({ streak }) {
  const { count } = streak
  if (count < 1) return null

  return (
    <motion.div
      className="flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-extrabold"
      style={{
        background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,179,71,0.08))',
        border: '2px solid rgba(255,179,71,0.25)',
        fontFamily: "'Nunito', sans-serif",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
    >
      <span className="relative">
        <Flame className="w-5 h-5" style={{ color: '#FF6B35' }} />
        <motion.span
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
          style={{ background: '#FFD93D' }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </span>
      <span style={{ color: '#8B6F5C' }}>
        连续 <span style={{ color: '#FF6B35', fontSize: '1.1em' }}>{count}</span> 天
      </span>
    </motion.div>
  )
}