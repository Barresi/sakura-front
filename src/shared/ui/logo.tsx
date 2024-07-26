import { useTheme } from '@app/providers/theme-context/lib/useTheme'
import { type FC } from 'react'
import { useWindowSize } from '../lib/hooks/useWindowSize'

import logoDark from '@assets/ui/logo-dark.svg'
import logoLight from '@assets/ui/logo-light.svg'

import logoMobile from '@assets/ui/logo-mobile.png'

interface ILogoProps {
  isAdaptive?: boolean
  className?: string
}

const Logo: FC<ILogoProps> = ({ isAdaptive = false, className }) => {
  const { theme } = useTheme()
  const isMobile = useWindowSize(768)

  const desk = theme === 'dark' ? logoDark : logoLight
  const mobile = logoMobile

  if (!isAdaptive) {
    return <img src={desk} alt='Sakura logo' className={className} />
  }

  return <img src={isMobile ? mobile : desk} alt='Sakura logo' className={className} />
}

export { Logo }
