import { useEffect } from 'react'
import useBlindBox from './hooks/useBlindBox'
import BlindBox from './components/BlindBox'
import FoodCard from './components/FoodCard'
import CategoryChips from './components/CategoryChips'
import StreakBadge from './components/StreakBadge'
import HistoryPanel from './components/HistoryPanel'
import StartOverlay from './components/StartOverlay'
import ConfettiTrigger from './components/ConfettiTrigger'

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

  useEffect(() => cleanup, [cleanup])

  const showFood = phase === 'revealed' && selectedFood

  return (
    <div className="h-full flex flex-col overflow-hidden relative" style={{ zIndex: 1 }}>
      <ConfettiTrigger trigger={showFood} rarityConfig={rarityConfig} />
      <StartOverlay firstVisit={firstVisit} streak={streak} onDismiss={markVisited} />
      <HistoryPanel history={history} />

      {/* Header */}
      <header className="shrink-0 pt-5 px-5">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div>
            <h1 className="text-lg font-bold tracking-tight" style={{ color: '#1A1A2E' }}>
              小彭今天吃什么
            </h1>
            <p className="text-xs font-medium" style={{ color: '#9CA3AF' }}>
              治愈选择困难症 🎲
            </p>
          </div>
          <StreakBadge streak={streak} />
        </div>
      </header>

      {/* Today's hint */}
      {isTodayOpened && phase === 'idle' && (
        <div className="shrink-0 px-5 mt-1 text-center">
          <p className="text-xs font-medium" style={{ color: '#D1D5DB' }}>
            今天已经开过了，再来一次？
          </p>
        </div>
      )}

      {/* Category chips */}
      <div className="shrink-0 mt-3 mb-1 px-2">
        <div className="max-w-lg mx-auto">
          <CategoryChips selected={category} onChange={setCategory} />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 pb-6 overflow-y-auto">
        <div className="flex flex-col items-center w-full max-w-lg">
          {showFood ? (
            <div className="animate-slideUp">
              <FoodCard food={selectedFood} rarityConfig={rarityConfig} onReset={reset} />
              <p className="text-center mt-4 text-xs font-medium" style={{ color: '#D1D5DB' }}>
                不满意的可以换一个哦～
              </p>
            </div>
          ) : (
            <BlindBox phase={phase} onOpen={openBox} />
          )}
        </div>
      </main>
    </div>
  )
}