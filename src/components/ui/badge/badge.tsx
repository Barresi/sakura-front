import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@utils/utils'
import { badgeVariants } from '../variants/variants'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {}

const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
