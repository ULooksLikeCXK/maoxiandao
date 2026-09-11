import { Flame } from 'lucide-react'

export default function StreakBadge({ streak }) {
  const count = Math.max(0, streak || 0)

  return (
    <div
      className="flex items-center gap-1 font-body text-sm tracking-wider"
      style={{ color: 'var(--color-dim)' }}
    >
      <Flame
        className="w-4 h-4"
        style={{
          color: count > 0 ? 'var(--color-accent)' : 'var(--color-dim)',
          fill: count > 0 ? 'var(--color-accent)' : 'none',
        }}
      />
      <span>连续 {count} 天</span>
    </div>
  )
}