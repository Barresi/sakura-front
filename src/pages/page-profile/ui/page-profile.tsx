import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { type FC } from 'react'

const PageProfile: FC = () => {
  const user = useAppSelector(selectUser)

  return (
    <div>
      <h1>
        name: {user?.firstName} {user?.lastName}
      </h1>
      <h1>email: {user?.email}</h1>
      <h1>id: {user?.id}</h1>
    </div>
  )
}
export { PageProfile }
