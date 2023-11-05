import { useEffect, type FC } from 'react'
import DefaultTab from './default-tab'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectSended } from '@src/store/reducers/friends/selectors'
import { getSendedThunk } from '@src/store/reducers/friends/async-thunks'

const SendedTab: FC = () => {
  const dispatch = useAppDispatch()
  const sended = useAppSelector(selectSended)

  useEffect(() => {
    dispatch(getSendedThunk())
  }, [])

  return <DefaultTab data={sended} type='sended' />
}

export default SendedTab
