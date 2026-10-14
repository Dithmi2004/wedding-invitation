import { useEffect, useMemo, useState } from 'react'

export type CountdownValue = {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

const getCountdown = (targetDate: Date): CountdownValue => {
  const total = targetDate.getTime() - Date.now()

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
  }

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    isExpired: false,
  }
}

export const useCountdown = (dateIso: string) => {
  const targetDate = useMemo(() => new Date(dateIso), [dateIso])
  const [countdown, setCountdown] = useState<CountdownValue>(() => getCountdown(targetDate))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  return countdown
}
