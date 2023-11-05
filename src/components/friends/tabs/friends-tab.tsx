import { useEffect, type FC } from 'react'
import DefaultTab from './default-tab'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectFriends } from '@src/store/reducers/friends/selectors'
import { getFriendsThunk } from '@src/store/reducers/friends/async-thunks'

const FriendsTab: FC = () => {
  const dispatch = useAppDispatch()
  const friends = useAppSelector(selectFriends)

  useEffect(() => {
    dispatch(getFriendsThunk())
  }, [])

  return <DefaultTab data={friends} type='friends' />
}

export default FriendsTab
