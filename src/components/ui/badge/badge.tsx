import { type FC } from 'react'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@utils/utils'
import { badgeVariants } from '../variants/variants'

export interface IBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge: FC<IBadgeProps> = ({ className, variant, ...props }) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
