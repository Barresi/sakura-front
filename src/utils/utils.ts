import { type IMessage } from '@src/types/api'
import { type IFormattedMessages } from '@src/types/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function parseDateToMonth(date: string): string {
  const months = [
    'янв',
    'февр',
    'март',
    'апр',
    'май',
    'июнь',
    'июль',
    'авг',
    'сент',
    'окт',
    'нояб',
    'дек'
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

export function groupChatMessagesByDate(chatMessages: IMessage[]): IFormattedMessages[] {
  const result = chatMessages.reduce((acc: Record<string, IMessage[]>, chat) => {
    const date = new Date(chat.createdAt).toISOString().slice(0, 10)

    if (!acc[date]) {
      acc[date] = []
    }

    acc[date].push(chat)

    return acc
  }, {})

  const finalResult = Object.entries(result).map(([date, chats]) => {
    return { date, chats }
  })

  return finalResult
}
