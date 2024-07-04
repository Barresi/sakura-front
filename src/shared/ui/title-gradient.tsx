import { type FC, type ReactNode } from 'react'

interface ITitleGradientProps {
  children?: ReactNode
  className?: string
}
const TitleGradient: FC<ITitleGradientProps> = ({ className, children }) => {
  return (
    <div className={`relative w-fit m-auto p-1 ${className}`}>
      <span className='relative z-10 text-lg'>{children}</span>
      <div
        className='absolute bottom-0 top-0 right-[-20px] rounded-[10px] max-w-[180px] w-full p-[2px] bg-gradient-to-tl from-redHover/50 m-auto
      from-0% to-50%'
      >
        <div className='bg-white dark:bg-grayBlue rounded-[8px] h-full w-full' />
      </div>
    </div>
  )
}
export { TitleGradient }
