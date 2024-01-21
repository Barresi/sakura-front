import { type VariantProps } from 'class-variance-authority'
import { type FC } from 'react'
import { cn } from '../lib/merge-classes'
import { badgeVariants } from '../lib/ui-variants'

export interface IBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge: FC<IBadgeProps> = ({ className, variant, ...props }) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
