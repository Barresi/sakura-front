import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { selectUserStatus } from '@app/store/reducers/profileInfo/selectors'
import { AuthStatus } from '@shared/lib/types/api'
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
