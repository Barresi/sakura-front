import { useEffect, type FC } from 'react'
import DefaultTab from './default-tab'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers } from '@src/store/reducers/friends/selectors'
import { getAllUsersThunk } from '@src/store/reducers/friends/async-thunks'

const AllUsersTab: FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectAllUsers)

  useEffect(() => {
    dispatch(getAllUsersThunk())
  }, [])

  return <DefaultTab data={users} type='all' />
}

export default AllUsersTab
