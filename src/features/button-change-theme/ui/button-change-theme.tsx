import { useTheme } from '@app/providers/theme-context'
import { ButtonSetting } from '@shared/ui/button-setting'
import { type FC } from 'react'

interface IButtonChangeThemeProps {
  className?: string
}

const ButtonChangeTheme: FC<IButtonChangeThemeProps> = ({ className }) => {
  const { toggleTheme } = useTheme()
  return <ButtonSetting icon='theme' onClick={toggleTheme} className={className} />
}
export { ButtonChangeTheme }
