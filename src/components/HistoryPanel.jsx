import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

function groupByDate(h) {
  const g = []; const s = new Set()
  for (const i of h) { if (s.has(i.date)) continue; s.add(i.date); g.push({ date: i.date, items: h.filter(x => x.date === i.date) }) }
  return g
}

function fmt(d) {
  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10)
  if (d === today) return '今天'
  if (d === yesterday) return '昨天'
  const dt = new Date(d + 'T00:00:00')
  const w = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return `${dt.getMonth() + 1}月${dt.getDate()}日 ${w[dt.getDay()]}`
}

export default function HistoryPanel({ history }) {
  const [open, setOpen] = useState(false)
  const grouped = groupByDate(history || [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.button
        className="fixed top-6 right-6 z-40 font-body text-sm tracking-wide cursor-pointer bg-transparent border-none"
        style={{ color: 'var(--color-dim)' }}
        whileHover={{ color: 'var(--color-ink)' }}
        onClick={() => setOpen(true)}
      >
        记录
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(15,23,42,0.10)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] overflow-y-auto flex flex-col"
        style={{
          background: 'var(--color-surface)',
          borderLeft: '1px solid var(--color-border)',
        }}
        initial={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div
          className="flex items-center justify-between shrink-0 px-5 py-4"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <h2 className="font-bold text-base tracking-wide" style={{ color: 'var(--color-ink)' }}>
            开盒记录
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="p-1 cursor-pointer bg-transparent border-none"
            style={{ color: 'var(--color-dim)' }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 px-4 py-4 space-y-5">
          {grouped.length === 0 ? (
            <div className="flex items-center justify-center h-40">
              <p className="font-body text-sm" style={{ color: 'var(--color-dim)' }}>暂无记录</p>
            </div>
          ) : (
            grouped.map((g, gi) => (
              <motion.div
                key={g.date}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: gi * 0.04 }}
              >
                <p className="font-body text-xs mb-2.5 tracking-wide font-medium" style={{ color: 'var(--color-dim)' }}>
                  {fmt(g.date)}
                </p>
                <div className="space-y-1.5">
                  {g.items.map((item, ii) => (
                    <div
                      key={`${g.date}-${ii}`}
                      className="flex items-center gap-3 px-3 py-2.5"
                      style={{
                        background: 'var(--color-muted)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 8,
                      }}
                    >
                      <span className="text-xl leading-none">{item.emoji}</span>
                      <div className="min-w-0">
                        <p className="font-body text-sm font-medium truncate" style={{ color: 'var(--color-ink)' }}>
                          {item.name}
                        </p>
                        <p className="font-body text-xs tracking-wide" style={{ color: 'var(--color-dim)' }}>
                          {item.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </>
  )
}