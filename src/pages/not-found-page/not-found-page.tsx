import { type FC } from 'react'
import notFoundDark from '@assets/404/404 dark.svg'
import notFoundLight from '@assets/404/404 light.svg'
import { useTheme } from '@src/app/providers/theme-context/useTheme'

const NotFoundPage: FC<{ type: 'inside' | 'outside' }> = ({ type }) => {
  const { theme } = useTheme()
  const insideClass =
    'flex justify-center items-center flex-auto h-[calc(100vh-124px)] px-5'
  const outsideClass = 'w-[100vw] h-[100vh] flex justify-center items-center px-5'
  return (
    <div className={type === 'inside' ? insideClass : outsideClass}>
      <img
        src={theme === 'dark' ? notFoundDark : notFoundLight}
        alt='not found'
        className='max-w-[321px]'
      />
    </div>
  )
}

export default NotFoundPage
