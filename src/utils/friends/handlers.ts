import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit'
import { deleteFriend } from '@src/api/friends/friends'
import { acceptFriend, cancelFriend, rejectFriend } from '@src/api/friends/requests'
import { addFriend } from '@src/api/friends/users'
import {
  getSendedThunk,
  getFriendsThunk,
  getReceivedThunk
} from '@src/store/reducers/friends/async-thunks'
import { type RootState } from '@src/store/store'
import { type IFriendsRequestResponse } from '@src/types/types'

export const addFriendHandler = async (
  id: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await addFriend(id)

  dispatch(getSendedThunk())
}

export const deleteFriendHandler = async (
  id: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await deleteFriend(id)

  dispatch(getFriendsThunk())
}

export const acceptRequestHandler = async (
  id: number,
  received: IFriendsRequestResponse[],
  currentId: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await acceptFriend(
    received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id
  )

  dispatch(getFriendsThunk())
  dispatch(getReceivedThunk())
}

export const rejectRequestHandler = async (
  id: number,
  received: IFriendsRequestResponse[],
  currentId: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await rejectFriend(
    received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id
  )

  dispatch(getReceivedThunk())
}

export const cancelRequestHandler = async (
  id: number,
  sended: IFriendsRequestResponse[],
  currentId: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
): Promise<void> => {
  await cancelFriend(
    sended.filter((item) => item.fromId === currentId && item.toId === id)[0]?.id
  )

  dispatch(getSendedThunk())
}
