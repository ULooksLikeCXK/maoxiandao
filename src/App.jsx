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
    markVisited,
    openBox,
    reset,
    cleanup,
  } = useBlindBox()

  useEffect(() => cleanup, [cleanup])

  const showFood = phase === 'revealed' && selectedFood

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>
      <ConfettiTrigger trigger={showFood} rarityConfig={rarityConfig} />
      <StartOverlay firstVisit={firstVisit} streak={streak} onDismiss={markVisited} />
      <HistoryPanel history={history} />

      {/* Header */}
      <header className="shrink-0 flex items-center justify-between pt-6 px-6 pb-2">
        <div className="flex items-baseline gap-2">
          <h1 className="font-display text-lg font-bold tracking-wide" style={{ color: 'var(--ink)' }}>
            小彭今天吃什么
          </h1>
          <span className="font-body text-xs tracking-widest" style={{ color: 'var(--text-dim)' }}>
            / daily food oracle
          </span>
        </div>
        <StreakBadge streak={streak} />
      </header>

      {/* Category chips */}
      <div className="shrink-0 px-4 mt-2">
        <div className="max-w-lg mx-auto">
          <CategoryChips selected={category} onChange={setCategory} />
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-6 overflow-y-auto">
        <div className="flex flex-col items-center w-full max-w-lg">
          {showFood ? (
            <FoodCard food={selectedFood} rarityConfig={rarityConfig} onReset={reset} />
          ) : (
            <BlindBox phase={phase} onOpen={openBox} />
          )}
        </div>
      </main>
    </div>
  )
}