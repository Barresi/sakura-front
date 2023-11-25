import { type RootState } from '@src/store/store'
import { type IChat } from '@src/types/api'

export const selectMessengerUserChats: (store: RootState) => IChat[] = ({ messenger }) =>
  [...messenger.userChats].sort((a, b) => {
    const aDate = new Date(a.messages[a.messages.length - 1]?.createdAt || b.updatedAt)
    const bDate = new Date(b.messages[b.messages.length - 1]?.createdAt || b.updatedAt)

    return bDate.getTime() - aDate.getTime()
  })

export const selectMessengerIsLoading: (store: RootState) => boolean = (store) =>
  store.friends.isLoading

export const selectMessengerError: (store: RootState) => string = (store) =>
  store.friends.error
