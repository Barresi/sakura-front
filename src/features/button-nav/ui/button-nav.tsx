import { type Icon } from '@shared/lib/button-icons'
import { cn } from '@shared/lib/merge-classes'
import { Badge } from '@shared/ui/badge'
import { Button } from '@shared/ui/button'
import { type FC, type ReactNode } from 'react'
import { NavLink, type NavLinkProps } from 'react-router-dom'

interface IButtonNavProps extends NavLinkProps {
  badge?: number
  icon?: Icon
  linkClassName?: string
  className?: string
}

const ButtonNav: FC<IButtonNavProps> = ({
  children,
  icon,
  className = '',
  linkClassName = '',
  badge,
  ...props
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${linkClassName} [&>*]:!text-red w-[20%]` : `${linkClassName} w-[20%]`
      }
      {...props}
    >
      <Button
        className={cn(className, 'relative')}
        icon={icon}
        iconPos='left'
        variant='text'
      >
        {children as ReactNode}
        {badge! > 0 && (
          <Badge
            className={
              'absolute top-0 lg:top-[50%] lg:translate-y-[-50%] right-0 sm:right-[20%] lg:right-4'
            }
          >
            {badge}
          </Badge>
        )}
      </Button>
    </NavLink>
  )
}

export { ButtonNav }
