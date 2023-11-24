import { type IMessage } from '@src/types/api'

export interface IFormattedMessages {
  date: string
  chats: IMessage[]
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
