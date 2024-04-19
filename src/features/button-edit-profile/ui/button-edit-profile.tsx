import { AppRoutes } from '@shared/lib/types/routes'
import { Button } from '@shared/ui/button'
import { type FC, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface IButtonEditProfileProps {
  children?: ReactNode
  className?: string
  type: 'icon' | 'text'
}
const ButtonEditProfile: FC<IButtonEditProfileProps> = ({ className, type }) => {
  const navigate = useNavigate()
  const clickHandler = (): void => {
    navigate(AppRoutes.SETTINGS)
  }

  if (type === 'icon')
    return (
      <Button
        icon={'edit'}
        iconPos='left'
        variant='secondary'
        onClick={clickHandler}
        className={className}
      />
    )

  return (
    <Button variant='secondary' className={className} onClick={clickHandler}>
      Редактировать
    </Button>
  )
}
export { ButtonEditProfile }
