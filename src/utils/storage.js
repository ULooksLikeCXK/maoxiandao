const STORAGE_KEY = 'maoxiandao_data'

function getDefaultData() {
  return {
    history: [],       // [{ date: "2026-09-11", foodId: "...", category: "川菜" }]
    streak: { count: 0, lastDate: null }, // { count: 3, lastDate: "2026-09-10" }
    firstVisit: true,
  }
}

export function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return getDefaultData()
    const data = JSON.parse(raw)
    return { ...getDefaultData(), ...data }
  } catch {
    return getDefaultData()
  }
}

export function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // storage full — silently fail
  }
}

export function getToday() {
  return new Date().toISOString().slice(0, 10)
}

/**
 * Record opening a box. Updates streak and history.
 */
export function recordOpening(food, data) {
  const today = getToday()
  const entry = { date: today, foodId: food.id, name: food.name, emoji: food.emoji, category: food.category }

  // Update history — keep at most 30 days
  const newHistory = [entry, ...data.history].slice(0, 30)

  // Update streak
  let { count, lastDate } = data.streak

  if (lastDate === today) {
    // Already opened today, streak unchanged
  } else if (lastDate === getYesterday()) {
    count += 1
    lastDate = today
  } else {
    count = 1
    lastDate = today
  }

  const newData = {
    ...data,
    history: newHistory,
    streak: { count, lastDate },
    firstVisit: false,
  }

  saveData(newData)
  return newData
}

export function getYesterday() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}