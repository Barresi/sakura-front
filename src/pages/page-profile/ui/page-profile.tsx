import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { type FC } from 'react'

const PageProfile: FC = () => {
  const { email, id, firstName, lastName } = useAppSelector(selectUser)

  return (
    <div>
      <h1>
        name: {firstName} {lastName}
      </h1>
      <h1>email: {email}</h1>
      <h1>id: {id}</h1>
    </div>
  )
}
export { PageProfile }
