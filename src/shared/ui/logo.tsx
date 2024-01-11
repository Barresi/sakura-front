import { useTheme } from '@app/providers/theme-context/lib/useTheme'
import { type FC } from 'react'
import { useWindowSize } from '../lib/hooks/useWindowSize'

import logoDark from '@assets/ui/logo-dark.svg'
import logoLight from '@assets/ui/logo-light.svg'
import logoMobileDark from '@assets/ui/logo-mobile-dark.svg'
import logoMobileLight from '@assets/ui/logo-mobile-light.svg'

interface ILogoProps {
  isAdaptive?: boolean
}

const Logo: FC<ILogoProps> = ({ isAdaptive = false }) => {
  const { theme } = useTheme()
  const isMobile = useWindowSize(768)

  const desk = theme === 'dark' ? logoDark : logoLight
  const mobile = theme === 'dark' ? logoMobileDark : logoMobileLight

  if (!isAdaptive) {
    return <img src={desk} alt='Sakura logo' />
  }

  return <img src={isMobile ? mobile : desk} alt='Sakura logo' />
}

export { Logo }
