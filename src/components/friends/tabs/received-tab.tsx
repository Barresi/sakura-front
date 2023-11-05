import { useEffect, type FC } from 'react'
import DefaultTab from './default-tab'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectReceived } from '@src/store/reducers/friends/selectors'
import { getReceivedThunk } from '@src/store/reducers/friends/async-thunks'

const ReceivedTab: FC = () => {
  const dispatch = useAppDispatch()
  const received = useAppSelector(selectReceived)

  useEffect(() => {
    dispatch(getReceivedThunk())
  }, [])

  return <DefaultTab data={received} type='requests' />
}

export default ReceivedTab
