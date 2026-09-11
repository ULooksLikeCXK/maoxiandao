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
      {/* trigger — pirate logbook button */}
      <motion.button
        className="font-body text-sm font-black tracking-wide cursor-pointer flex items-center gap-1.5 px-4 py-2"
        style={{
          background: 'var(--color-surface)',
          color: 'var(--color-ink)',
          border: '3px solid var(--color-ink)',
          borderRadius: 999,
          boxShadow: '0 3px 0 rgba(62, 39, 35, 0.16)',
        }}
        whileHover={{ y: -2, boxShadow: '0 5px 0 rgba(62, 39, 35, 0.16)' }}
        whileTap={{ y: 2, boxShadow: '0 1px 0 rgba(62, 39, 35, 0.16)' }}
        onClick={() => setOpen(true)}
      >
        <span className="text-sm">📜</span>
        <span>航海日志</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(62, 39, 35, 0.22)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] overflow-y-auto flex flex-col"
        style={{
          background: 'var(--color-canvas)',
          borderLeft: '4px solid var(--color-ink)',
        }}
        initial={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      >
        <div
          className="flex items-center justify-between shrink-0 px-5 py-4"
          style={{ borderBottom: '3px solid var(--color-border)' }}
        >
          <h2 className="font-black text-base tracking-wide flex items-center gap-2" style={{ color: 'var(--color-ink)' }}>
            ⛵ 航海日志
          </h2>
          <motion.button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center cursor-pointer"
            style={{
              width: 30, height: 30,
              background: 'var(--color-muted)',
              color: 'var(--color-ink)',
              border: '2px solid var(--color-border)',
              borderRadius: '50%',
            }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={15} />
          </motion.button>
        </div>

        <div className="flex-1 px-4 py-4 space-y-5">
          {grouped.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-3">
              <div
                className="flex items-center justify-center"
                style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-muted)' }}
              >
                <span style={{ fontSize: '1.6rem' }}>🏴‍☠️</span>
              </div>
              <p className="font-body text-sm font-bold" style={{ color: 'var(--color-dim)' }}>
                日志空空如也
              </p>
              <p className="font-body text-xs" style={{ color: 'var(--color-border)' }}>
                触碰恶魔果实开始冒险吧
              </p>
            </div>
          ) : (
            grouped.map((g, gi) => (
              <motion.div
                key={g.date}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: gi * 0.04 }}
              >
                <p className="font-body text-xs mb-2.5 tracking-widest font-black" style={{ color: 'var(--color-ocean)' }}>
                  🗓️ {fmt(g.date)}
                </p>
                <div className="space-y-2">
                  {g.items.map((item, ii) => (
                    <div
                      key={`${g.date}-${ii}`}
                      className="flex items-center gap-3 px-3 py-2.5"
                      style={{
                        background: 'var(--color-surface)',
                        border: '2px solid var(--color-border)',
                        borderLeft: '4px solid var(--color-gold)',
                        borderRadius: '0 12px 12px 0',
                      }}
                    >
                      <span
                        className="flex items-center justify-center shrink-0 text-lg leading-none"
                        style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-muted)' }}
                      >
                        {item.emoji}
                      </span>
                      <div className="min-w-0">
                        <p className="font-body text-sm font-black truncate" style={{ color: 'var(--color-ink)' }}>
                          {item.name}
                        </p>
                        <p className="font-body text-xs font-bold tracking-wide" style={{ color: 'var(--color-dim)' }}>
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

        {/* bottom Belly counter */}
        {grouped.length > 0 && (
          <div className="shrink-0 px-5 py-3 text-center" style={{ borderTop: '2px solid var(--color-border)' }}>
            <p className="font-body text-xs font-black tracking-widest" style={{ color: 'var(--color-gold)' }}>
              💰 累计冒险 {grouped.reduce((acc, g) => acc + g.items.length, 0)} 次
            </p>
          </div>
        )}
      </motion.div>
    </>
  )
}