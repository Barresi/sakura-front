import { cn } from '@shared/lib/merge-classes'
import { type FC, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ILinkNameProps {
  children?: ReactNode
  className?: string
  link: string | undefined
}
const LinkName: FC<ILinkNameProps> = ({ className, children, link }) => {
  return (
    <Link
      to={`/main/users/${link}`}
      className={cn('hover:underline inline-block', className)}
    >
      {children}
    </Link>
  )
}
export { LinkName }
