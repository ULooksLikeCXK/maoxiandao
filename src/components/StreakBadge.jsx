import { Heart } from 'lucide-react'

export default function StreakBadge({ streak }) {
  const count = Math.max(0, streak || 0)
  const active = count > 0

  return (
    <div
      className="flex items-center gap-1.5 font-body text-sm font-black tracking-wide px-4 py-2 select-none"
      style={{
        background: active ? 'var(--color-surface)' : 'var(--color-muted)',
        color: 'var(--color-ink)',
        border: `3px solid ${active ? 'var(--color-ink)' : 'var(--color-border)'}`,
        borderRadius: 999,
        boxShadow: active ? '0 3px 0 rgba(114, 83, 73, 0.16)' : 'none',
      }}
    >
      <Heart
        className={`w-4 h-4 ${active ? 'animate-heart' : ''}`}
        style={{
          color: active ? 'var(--color-brand)' : 'var(--color-dim)',
          fill: active ? 'var(--color-brand)' : 'none',
        }}
      />
      <span>连续 {count} 天</span>
    </div>
  )
}
