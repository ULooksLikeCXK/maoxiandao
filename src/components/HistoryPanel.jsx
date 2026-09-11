import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock } from 'lucide-react'

function groupByDate(history) {
  const groups = []; const seen = new Set()
  for (const item of history) {
    if (seen.has(item.date)) continue
    seen.add(item.date)
    groups.push({ date: item.date, items: history.filter(h => h.date === item.date) })
  }
  return groups
}

function formatDate(s) {
  const d = new Date(s)
  const today = new Date().toISOString().slice(0, 10)
  const y = new Date(); y.setDate(y.getDate() - 1)
  const yesterday = y.toISOString().slice(0, 10)
  if (s === today) return '今天'
  if (s === yesterday) return '昨天'
  const w = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return `${d.getMonth() + 1}月${d.getDate()}日 ${w[d.getDay()]}`
}

export default function HistoryPanel({ history }) {
  const [open, setOpen] = useState(false)
  const grouped = groupByDate(history)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.button
        className="fixed top-5 right-5 z-40 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: '#FFFFFF',
          border: '1.5px solid rgba(0,0,0,0.06)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(true)}
      >
        <Clock className="w-4 h-4" style={{ color: '#6B7280' }} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(2px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto"
        style={{ background: '#FBF7F2', borderLeft: '1px solid rgba(0,0,0,0.04)' }}
        initial={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between p-5" style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
          <h2 className="text-base font-bold" style={{ color: '#1A1A2E' }}>开盒记录</h2>
          <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer">
            <X className="w-4 h-4" style={{ color: '#6B7280' }} />
          </button>
        </div>

        <div className="p-4 space-y-5">
          {grouped.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-16">
              <span className="text-4xl">🎁</span>
              <p className="text-sm font-medium" style={{ color: '#9CA3AF' }}>还没有记录</p>
            </div>
          ) : (
            grouped.map((g, gi) => (
              <motion.div
                key={g.date}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: gi * 0.04 }}
              >
                <h3 className="text-xs font-semibold mb-2 px-1" style={{ color: '#9CA3AF' }}>{formatDate(g.date)}</h3>
                <div className="space-y-1.5">
                  {g.items.map((item, ii) => (
                    <div
                      key={`${g.date}-${ii}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                      style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.03)' }}
                    >
                      <span className="text-xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ color: '#1A1A2E' }}>{item.name}</p>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>{item.category}</p>
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