import { type FC, type ReactNode } from 'react'

interface ITitleSystemProps {
  children?: ReactNode
  className?: string
}
const TitleSystem: FC<ITitleSystemProps> = ({ className, children }) => {
  return (
    <div
      className={`w-fit mx-auto px-[21px] py-[9px] rounded-[20px] border border-cadet text-signalBlack dark:text-darkGray text-base ${className}`}
    >
      {children}
    </div>
  )
}
export { TitleSystem }
