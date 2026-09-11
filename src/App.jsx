import { useEffect } from 'react'
import useBlindBox from './hooks/useBlindBox'
import BlindBox from './components/BlindBox'
import FoodCard from './components/FoodCard'
import CategoryChips from './components/CategoryChips'
import StreakBadge from './components/StreakBadge'
import HistoryPanel from './components/HistoryPanel'
import StartOverlay from './components/StartOverlay'
import ConfettiTrigger from './components/ConfettiTrigger'

function JollyRoger() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" style={{ display: 'block' }}>
      {/* skull */}
      <circle cx="24" cy="21" r="12" fill="var(--color-surface)" stroke="var(--color-ink)" strokeWidth="3" />
      {/* eyes */}
      <circle cx="19" cy="19" r="4" fill="var(--color-ink)" />
      <circle cx="29" cy="19" r="4" fill="var(--color-ink)" />
      {/* nose */}
      <path d="M22 24 L24 28 L26 24" fill="var(--color-ink)" />
      {/* teeth line */}
      <line x1="16" y1="29" x2="32" y2="29" stroke="var(--color-ink)" strokeWidth="2" />
      <line x1="20" y1="29" x2="20" y2="33" stroke="var(--color-ink)" strokeWidth="2" />
      <line x1="24" y1="29" x2="24" y2="33" stroke="var(--color-ink)" strokeWidth="2" />
      <line x1="28" y1="29" x2="28" y2="33" stroke="var(--color-ink)" strokeWidth="2" />
      {/* crossbones */}
      <line x1="4" y1="16" x2="20" y2="38" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="44" y1="16" x2="28" y2="38" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="4" cy="16" r="4" fill="var(--color-surface)" stroke="var(--color-ink)" strokeWidth="3" />
      <circle cx="44" cy="16" r="4" fill="var(--color-surface)" stroke="var(--color-ink)" strokeWidth="3" />
    </svg>
  )
}

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
          <JollyRoger />
          <h1
            className="font-black text-xl tracking-wide select-none"
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