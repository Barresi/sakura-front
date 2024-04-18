import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import { forwardRef, type FC } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/merge-classes'
import { type IPropsForwardRefsUI } from '../lib/types/props'

import avatarLight from '@assets/avatar/default avatar light.svg'

interface IAvatarProps extends React.ComponentPropsWithoutRef<typeof Root> {
  text?: string
}

const Avatar = forwardRef<React.ElementRef<typeof Root>, IAvatarProps>(
  ({ className, children, text, ...props }, ref) => (
    <div className='flex flex-col items-center rounded-full'>
      <Root
        ref={ref}
        className={cn(
          'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
          className
        )}
        {...props}
      >
        {children}
      </Root>
      <span className='text-avatar-foreground'>{text}</span>
    </div>
  )
)
Avatar.displayName = Root.displayName

const AvatarImage = forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image> & IPropsForwardRefsUI
>(({ className, src, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn('object-cover aspect-square h-full w-full', '', className)}
    src={src}
    {...props}
  />
))
AvatarImage.displayName = Image.displayName

const AvatarFallback = forwardRef<
  React.ElementRef<typeof Fallback>,
  React.ComponentPropsWithoutRef<typeof Fallback> & IPropsForwardRefsUI
>(({ className, ...props }, ref) => (
  <Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full text-center items-center justify-center rounded-full border border-gray-700',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = Fallback.displayName

interface IUserAvatarProps {
  src: string | null
  isImgNotOnBackend?: boolean
  className?: string
  link?: string
}

const UserAvatar: FC<IUserAvatarProps> = ({
  src,
  className,
  isImgNotOnBackend,
  link
}) => {
  const urlBackend = import.meta.env.VITE_BACKEND_DOMEN + '/ftp/avatars/'
  const img = isImgNotOnBackend ? src : urlBackend + src

  if (link) {
    return (
      <Link to={`/main/users/${link}`}>
        <Avatar className={className}>
          <AvatarImage src={src && img ? img : avatarLight} />
        </Avatar>
      </Link>
    )
  }
  return (
    <Avatar className={className}>
      <AvatarImage src={src && img ? img : avatarLight} />
    </Avatar>
  )
}

export { UserAvatar }
