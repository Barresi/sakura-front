import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit'
import { deleteFriend } from '@shared/api/friends/friends'
import { acceptFriend, cancelFriend, rejectFriend } from '@shared/api/friends/requests'
import { addFriend } from '@shared/api/friends/users'
import { createChatRequest } from '@shared/api/messenger/messenger'
import { type IFriend } from '@shared/lib/types/api'
import {
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from '@store/reducers/friends/async-thunks'
import { type RootState } from '@store/store'
import { type NavigateFunction } from 'react-router-dom'

export const addFriendHandler = async (
  id: string,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await addFriend(id)

  dispatch(getSendedThunk())
}

export const deleteFriendHandler = async (
  id: string,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await deleteFriend(id)

  dispatch(getFriendsThunk())
}

export const acceptRequestHandler = async (
  id: string,
  received: IFriend[],
  currentId: string,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await acceptFriend(
    received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id
  )

  dispatch(getFriendsThunk())
  dispatch(getReceivedThunk())
}

export const rejectRequestHandler = async (
  id: string,
  received: IFriend[],
  currentId: string,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await rejectFriend(
    received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id
  )

  dispatch(getReceivedThunk())
}

export const cancelRequestHandler = async (
  id: string,
  sended: IFriend[],
  currentId: string,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await cancelFriend(
    sended.filter((item) => item.fromId === currentId && item.toId === id)[0]?.id
  )

  dispatch(getSendedThunk())
}

export const createChatRequestHandler = async (
  userId: string,
  friendId: string,
  navigate: NavigateFunction
): Promise<void> => {
  const res = await createChatRequest(userId, friendId)

  if (res.chatId) navigate('/main/messenger/' + res.chatId)
}
