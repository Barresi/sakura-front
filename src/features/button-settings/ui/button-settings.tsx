import { AppRoutes } from '@shared/lib/types/routes'
import { ButtonSetting } from '@shared/ui/button-setting'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonSettings: FC = () => {
  const navigate = useNavigate()
  const clickHandler = (): void => {
    navigate(AppRoutes.SETTINGS)
  }
  return <ButtonSetting icon='settings' onClick={clickHandler} />
}
export { ButtonSettings }
