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
    phase, selectedFood, rarityConfig,
    category, setCategory, history, streak,
    firstVisit, markVisited, openBox, reset, cleanup,
  } = useBlindBox()

  useEffect(() => cleanup, [cleanup])

  const showFood = phase === 'revealed' && selectedFood

  return (
    <div
      className="h-full flex flex-col overflow-hidden"
      style={{ position: 'relative', zIndex: 1, background: 'var(--color-canvas)' }}
    >
      <ConfettiTrigger trigger={showFood} rarityConfig={rarityConfig} />
      <StartOverlay firstVisit={firstVisit} streak={streak} onDismiss={markVisited} />
      <HistoryPanel history={history} />

      {/* Header */}
      <header className="shrink-0 flex items-center justify-between pt-6 px-6 pb-2">
        <div className="flex items-baseline gap-2.5">
          <h1
            className="font-bold text-lg tracking-wide select-none"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
          >
            小彭今天吃什么
          </h1>
          <span
            className="text-xs tracking-wide select-none"
            style={{ color: 'var(--color-dim)', fontStyle: 'italic' }}
          >
            daily food oracle
          </span>
        </div>
        <StreakBadge streak={streak} />
      </header>

      {/* Categories */}
      <div className="shrink-0 px-4 mt-3">
        <CategoryChips selected={category} onChange={setCategory} />
      </div>

      {/* Main stage */}
      <main className="flex-1 flex items-center justify-center px-6 pb-10 overflow-y-auto">
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