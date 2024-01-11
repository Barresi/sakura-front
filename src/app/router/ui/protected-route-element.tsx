import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { AuthStatus } from '@shared/lib/types/api'
import { selectUserStatus } from '@store/reducers/profileInfo/selectors'
import { type FC, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProtectedRouteElement {
  element: ReactElement
  protectedPageType: 'auth' | 'main'
}

const ProtectedRouteElement: FC<IProtectedRouteElement> = ({
  element,
  protectedPageType
}) => {
  const navigate = useNavigate()
  const userStatus = useAppSelector(selectUserStatus)

  switch (protectedPageType) {
    case 'auth':
      if (userStatus === AuthStatus.authorized) navigate('/main/profile')
      break
    case 'main':
      if (userStatus === AuthStatus.notAuthorized) navigate('/')
      break
  }

  return element
}

export default ProtectedRouteElement
