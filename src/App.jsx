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

      {/* Header — pirate crew banner */}
      <header className="shrink-0 flex items-center justify-between pt-5 px-5 pb-2">
        <div className="flex items-center gap-2.5">
          <img
            src="/maoxiandao/onepiece-logo.png"
            alt="海贼王"
            style={{ width: 32, height: 32, objectFit: 'contain', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))' }}
          />
          <h1
            className="font-black text-lg tracking-wide select-none"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
          >
            小彭今天<span style={{ color: 'var(--color-brand)' }}>吃什么</span>
          </h1>
          <span
            className="text-[10px] tracking-[0.2em] uppercase select-none hidden sm:inline"
            style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-display)' }}
          >
            for my love
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <StreakBadge streak={streak} />
          <HistoryPanel history={history} />
        </div>
      </header>

      {/* Categories */}
      <div className="shrink-0 px-4 mt-3">
        <CategoryChips selected={category} onChange={setCategory} />
      </div>

      {/* Main stage */}
      <main className="flex-1 flex items-center justify-center px-6 pb-10 overflow-hidden">
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