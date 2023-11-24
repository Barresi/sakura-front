import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function parseDateToMonth(date: string): string {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  const parseDate = new Date(date)
  const day = parseDate.getDate()
  const month = parseDate.getMonth()
  return `${day} ${months[month]}`
}
export function parseDateToTime(date: string): string {
  const parseDate = new Date(date)
  const hours = parseDate.getHours().toString()
  const min = parseDate.getMinutes().toString()
  return `${hours.length < 2 ? '0' + hours : hours}:${min.length < 2 ? '0' + min : min}`
}
