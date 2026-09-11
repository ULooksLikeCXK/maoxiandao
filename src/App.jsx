import { useEffect } from 'react'
import useBlindBox from './hooks/useBlindBox'
import BlindBox from './components/BlindBox'
import FoodCard from './components/FoodCard'
import CategoryChips from './components/CategoryChips'
import StreakBadge from './components/StreakBadge'
import HistoryPanel from './components/HistoryPanel'
import StartOverlay from './components/StartOverlay'
import ConfettiTrigger from './components/ConfettiTrigger'

function CapsuleLogo() {
  return (
    <div className="relative shrink-0 select-none" style={{ width: 30, height: 30 }}>
      <div
        style={{
          position: 'absolute', top: 0, left: 0, width: 30, height: 15,
          background: 'var(--color-brand)',
          borderRadius: '999px 999px 0 0',
          boxShadow: 'inset 0 0 0 3px var(--color-ink)',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, width: 30, height: 15,
          background: 'var(--color-surface)',
          borderRadius: '0 0 999px 999px',
          boxShadow: 'inset 0 0 0 3px var(--color-ink)',
        }}
      />
    </div>
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

      {/* Header */}
      <header className="shrink-0 flex items-center justify-between pt-5 px-5 pb-2">
        <div className="flex items-center gap-2.5">
          <CapsuleLogo />
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
