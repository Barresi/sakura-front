import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { icons, type Icon } from '../lib/button-icons'
import { cn } from '../lib/merge-classes'
import { buttonVariants } from '../lib/ui-variants'

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: Icon
  iconPos?: 'left' | 'right'
}

const renderIcon = <T, P>(icon?: T, icons?: P): JSX.Element | undefined => {
  const result = icons![icon as keyof typeof icons]

  if (typeof result === 'string') {
    return <img src={result} alt='' />
  } else if (typeof result === 'object') {
    return result
  }
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
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

export { Button }
