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

export const addMessageInGroupedMessagesByDate = (
  formattedMessages: IFormattedMessages[],
  newMessage: IMessage
): IFormattedMessages[] => {
  const lastDateOfGroupMessages = new Date(
    formattedMessages[formattedMessages.length - 1]?.date
  ).toDateString()
  const dateOfNewMessage = new Date(newMessage.createdAt).toDateString()
  if (lastDateOfGroupMessages !== dateOfNewMessage) {
    formattedMessages.push({ date: dateOfNewMessage, messages: [newMessage] })
  } else {
    formattedMessages[formattedMessages.length - 1].messages.push(newMessage)
  }

  return formattedMessages
}
