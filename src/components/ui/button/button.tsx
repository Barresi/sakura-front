import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@utils/utils'
import { buttonVariants } from '../variants/variants'

import {
  edit,
  setting,
  notification,
  theme,
  darkTheme,
  exit,
  add,
  info,
  deleteFriend
} from '@assets/icons/icons'

import like from '@assets/ui/Like.svg'
import likeActive from '@assets/ui/Like Active.svg'
import likeActiveDark from '@assets/ui/Like Active Dark.svg'
import comment from '@assets/ui/Comment.svg'
import clear from '@assets/ui/Clear.svg'
import share from '@assets/ui/Share.svg'
import friends from '@assets/menu/friends.svg'
import message from '@assets/menu/message.svg'
import news from '@assets/menu/news.svg'
import photos from '@assets/menu/photos.svg'
import user from '@assets/menu/user.svg'

const icons = {
  edit,
  setting,
  notification,
  theme,
  darkTheme,
  info,
  exit,
  like,
  likeActive,
  likeActiveDark,
  comment,
  share,
  user,
  news,
  friends,
  message,
  photos,
  add,
  clear,
  deleteFriend
}

export type Icon = keyof typeof icons

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: Icon
  iconPos?: 'left' | 'right'
}

function renderIcon<T, P> (icon?: T, icons?: P) {
  const result = icons![icon as keyof typeof icons]

  if (typeof result === 'string') {
    return <img src={result} alt="" />
  } else if (typeof result === 'object') {
    return result
  }
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconPos = 'right',
      asChild = false,
      children,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    const iconToRender = renderIcon<Icon, typeof icons>(icon, icons)

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconPos === 'left' && iconToRender}
        {children}
        {iconPos === 'right' && iconToRender}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export default Button
