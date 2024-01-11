import { type IMessage } from '@shared/lib/types/api'

export interface IFormattedMessages {
  date: string
  messages: IMessage[]
}

export function groupChatMessagesByDate(chatMessages: IMessage[]): IFormattedMessages[] {
  const result = chatMessages.reduce((acc: Record<string, IMessage[]>, chat) => {
    const date = new Date(chat.createdAt).toDateString()
    if (!acc[date]) {
      acc[date] = []
    }

    acc[date].push(chat)

    return acc
  }, {})

  const finalResult = Object.entries(result).map(([date, messages]) => {
    return { date, messages }
  })

  return finalResult
}
