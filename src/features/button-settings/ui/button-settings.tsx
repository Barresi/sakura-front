import { ButtonSetting } from '@shared/ui/button-setting'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonSettings: FC = () => {
  const navigate = useNavigate()
  const clickHandler = (): void => {
    navigate('settings')
  }
  return <ButtonSetting icon='settingsWhite' onClick={clickHandler} />
}
export { ButtonSettings }
