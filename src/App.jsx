import { useEffect } from 'react'
import useBlindBox from './hooks/useBlindBox'
import BlindBox from './components/BlindBox'
import FoodCard from './components/FoodCard'
import CategoryChips from './components/CategoryChips'
import StreakBadge from './components/StreakBadge'
import HistoryPanel from './components/HistoryPanel'
import StartOverlay from './components/StartOverlay'
import ConfettiTrigger from './components/ConfettiTrigger'
import { UtensilsCrossed } from 'lucide-react'

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
    <div className="h-full flex flex-col overflow-hidden relative" style={{ zIndex: 1 }}>
      <ConfettiTrigger trigger={showFood} rarityConfig={rarityConfig} />

      <StartOverlay firstVisit={firstVisit} streak={streak} onDismiss={markVisited} />
      <HistoryPanel history={history} />

      {/* Header */}
      <header className="shrink-0 pt-5 px-5">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl" role="img" aria-label="adventure">🎪</span>
            <div>
              <h1
                className="text-lg font-extrabold leading-tight tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: '#2D1B0E' }}
              >
                冒险岛
              </h1>
              <p className="text-xs font-semibold" style={{ color: '#FF6B35' }}>
                盲盒吃饭
              </p>
            </div>
          </div>
          <StreakBadge streak={streak} />
        </div>
      </header>

      {/* Today's hint */}
      <div className="shrink-0 px-5 mt-1.5">
        {isTodayOpened && phase === 'idle' && (
          <div className="text-center">
            <p className="text-xs font-semibold flex items-center justify-center gap-1" style={{ color: '#FFB347' }}>
              <UtensilsCrossed className="w-3.5 h-3.5" />
              今天已经扭过啦～不过再来一次也无妨！
            </p>
          </div>
        )}
      </div>

      {/* Category chips */}
      <div className="shrink-0 px-2 mt-4">
        <div className="max-w-lg mx-auto">
          <CategoryChips selected={category} onChange={setCategory} />
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 pb-8 overflow-y-auto">
        <div className="flex flex-col items-center w-full max-w-lg">
          {showFood ? (
            <FoodCard food={selectedFood} rarityConfig={rarityConfig} onReset={reset} />
          ) : (
            <BlindBox phase={phase} onOpen={openBox} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="shrink-0 pb-4 text-center">
        <p className="text-xs font-medium" style={{ color: '#D4B896' }}>
          今天吃什么？扭个蛋来决定 🎲
        </p>
      </footer>
    </div>
  )
}