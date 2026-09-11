import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, History, ChevronRight, Calendar } from 'lucide-react'

function groupByDate(history) {
  const groups = []
  const seen = new Set()
  for (const item of history) {
    if (seen.has(item.date)) continue
    seen.add(item.date)
    groups.push({
      date: item.date,
      items: history.filter(h => h.date === item.date),
    })
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

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Toggle button */}
      <motion.button
        className="fixed top-4 right-4 z-40 p-3 rounded-full cursor-pointer"
        style={{
          background: 'rgba(26,16,40,0.8)',
          border: '1px solid rgba(167,139,250,0.2)',
          backdropFilter: 'blur(10px)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
      >
        <History className="w-5 h-5 text-purple-300" />
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side panel */}
      <motion.div
        className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto"
        style={{
          background: 'linear-gradient(180deg, #0f0a1a 0%, #1a1028 100%)',
          borderLeft: '1px solid rgba(167,139,250,0.2)',
          boxShadow: '-8px 0 30px rgba(0,0,0,0.5)',
        }}
        initial={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-bold text-purple-200">开盒记录</h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-purple-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {grouped.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-12 text-purple-400">
              <span className="text-5xl">🎁</span>
              <p className="text-sm">还没有开过盲盒</p>
              <p className="text-xs text-purple-500">快去开启你的美食冒险吧！</p>
            </div>
          ) : (
            grouped.map((group, gi) => (
              <motion.div
                key={group.date}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: gi * 0.05 }}
              >
                <h3 className="text-xs font-semibold text-purple-400 mb-2 px-1">
                  {formatDate(group.date)}
                </h3>
                <div className="space-y-1.5">
                  {group.items.map((item, ii) => (
                    <motion.div
                      key={`${item.date}-${item.foodId}-${ii}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                      whileHover={{ background: 'rgba(255,255,255,0.06)' }}
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-purple-100 truncate">{item.name}</p>
                        <p className="text-xs text-purple-500">{item.category}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-purple-600 shrink-0" />
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