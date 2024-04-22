import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface IButtonRedirectProfileProps {
  className?: string
}
const ButtonRedirectProfile: FC<IButtonRedirectProfileProps> = ({ className }) => {
  const navigate = useNavigate()
  const user = useAppSelector(selectUser)
  return (
    <Button
      className={className}
      variant='outline'
      onClick={() => {
        navigate(`/main/users/${user?.id}`)
      }}
    >
      Моя страница
    </Button>
  )
}
export { ButtonRedirectProfile }
