import { type FC, type ReactNode } from 'react'

interface ITitleTechToolsProps {
  children?: ReactNode
  className?: string
}
const TitleTechTools: FC<ITitleTechToolsProps> = ({ className, children }) => {
  return (
    <h4
      className={`px-2 py-1 rounded-[10px] inline-block bg-darkWhite dark:bg-redHover ${className}`}
    >
      {children}
    </h4>
  )
}
export { TitleTechTools }
