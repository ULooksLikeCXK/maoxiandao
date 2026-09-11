import { useEffect } from 'react'
import useBlindBox from './hooks/useBlindBox'
import BlindBox from './components/BlindBox'
import FoodCard from './components/FoodCard'
import CategoryChips from './components/CategoryChips'
import StreakBadge from './components/StreakBadge'
import HistoryPanel from './components/HistoryPanel'
import StartOverlay from './components/StartOverlay'
import ConfettiTrigger from './components/ConfettiTrigger'
import { saveData } from './utils/storage'
import { Sparkles } from 'lucide-react'

export default function App() {
  const {
    phase,
    selectedFood,
    rarityConfig,
    category,
    setCategory,
    history,
    streak,
    firstVisit,
    isTodayOpened,
    markVisited,
    openBox,
    reset,
    cleanup,
  } = useBlindBox()

  useEffect(() => {
    return cleanup
  }, [cleanup])

  const showFood = phase === 'revealed' && selectedFood

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <ConfettiTrigger trigger={showFood} rarityConfig={rarityConfig} />

      {/* Start overlay for first-time visitors */}
      <StartOverlay
        firstVisit={firstVisit}
        streak={streak}
        onDismiss={markVisited}
      />

      {/* History panel */}
      <HistoryPanel history={history} />

      {/* Header */}
      <header className="shrink-0 pt-4 px-4">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            <h1
              className="text-lg font-black"
              style={{
                background: 'linear-gradient(135deg, #e9d5ff, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              冒险岛 · 盲盒吃饭
            </h1>
          </div>
          <StreakBadge streak={streak} />
        </div>
      </header>

      {/* Today's status */}
      <div className="shrink-0 px-4 mt-2">
        {isTodayOpened && phase === 'idle' && (
          <div className="text-center">
            <p className="text-xs text-purple-500 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              今天已经开过盲盒啦，不过再来一次也无妨～
            </p>
          </div>
        )}
      </div>

      {/* Category chips */}
      <div className="shrink-0 px-2 mt-5">
        <div className="max-w-lg mx-auto">
          <CategoryChips selected={category} onChange={setCategory} />
        </div>
      </div>

      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-8 overflow-y-auto">
        <div className="flex flex-col items-center w-full max-w-lg">
          {/* Blind box or food card */}
          {showFood ? (
            <FoodCard food={selectedFood} rarityConfig={rarityConfig} onReset={reset} />
          ) : (
            <BlindBox phase={phase} onOpen={openBox} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="shrink-0 pb-4 text-center">
        <p className="text-xs text-purple-600">
          今天吃什么？让命运来帮你决定 🎲
        </p>
      </footer>
    </div>
  )
}