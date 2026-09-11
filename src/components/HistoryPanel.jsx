import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, History, Calendar } from 'lucide-react'

function groupByDate(history) {
  const groups = []
  const seen = new Set()
  for (const item of history) {
    if (seen.has(item.date)) continue
    seen.add(item.date)
    groups.push({ date: item.date, items: history.filter(h => h.date === item.date) })
  }
  return groups
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if (dateStr === today.toISOString().slice(0, 10)) return '今天'
  if (dateStr === yesterday.toISOString().slice(0, 10)) return '昨天'
  const m = d.getMonth() + 1
  const day = d.getDate()
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return `${m}月${day}日 ${week[d.getDay()]}`
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
      {/* Toggle */}
      <motion.button
        className="fixed top-5 right-5 z-40 p-3 rounded-full cursor-pointer shadow-md"
        style={{
          background: '#FFFFFF',
          border: '2px solid #F0E4D0',
          boxShadow: '0 2px 12px rgba(180,140,100,0.12)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
      >
        <History className="w-5 h-5" style={{ color: '#FF6B35' }} />
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(45,27,14,0.3)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Panel */}
      <motion.div
        className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto"
        style={{
          background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%)',
          borderLeft: '2px solid #F0E4D0',
          boxShadow: '-8px 0 30px rgba(180,140,100,0.15)',
          fontFamily: "'Nunito', sans-serif",
        }}
        initial={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5" style={{ borderBottom: '2px solid #F0E4D0' }}>
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5" style={{ color: '#FF6B35' }} />
            <h2 className="text-lg font-extrabold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: '#2D1B0E' }}>
              扭蛋记录
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-xl hover:bg-[#F0E4D0]/30 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" style={{ color: '#8B6F5C' }} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-5">
          {grouped.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-14" style={{ color: '#8B6F5C' }}>
              <span className="text-6xl">🎪</span>
              <p className="text-sm font-semibold">还没有扭过蛋</p>
              <p className="text-xs" style={{ color: '#D4B896' }}>快去扭出今天的美食吧！</p>
            </div>
          ) : (
            grouped.map((group, gi) => (
              <motion.div
                key={group.date}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: gi * 0.05 }}
              >
                <h3 className="text-xs font-extrabold mb-2.5 px-1" style={{ color: '#FFB347', fontFamily: "'Nunito', sans-serif" }}>
                  {formatDate(group.date)}
                </h3>
                <div className="space-y-2">
                  {group.items.map((item, ii) => (
                    <motion.div
                      key={`${item.date}-${item.foodId}-${ii}`}
                      className="flex items-center gap-3 px-3.5 py-3 rounded-2xl cursor-default"
                      style={{
                        background: '#FFFFFF',
                        border: '1.5px solid #F0E4D0',
                        boxShadow: '0 1px 4px rgba(180,140,100,0.06)',
                      }}
                      whileHover={{ background: '#FFF8F0' }}
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold truncate" style={{ color: '#2D1B0E' }}>{item.name}</p>
                        <p className="text-xs font-semibold" style={{ color: '#2EC4B6' }}>{item.category}</p>
                      </div>
                    </motion.div>
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