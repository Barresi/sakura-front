import { forwardRef } from 'react'
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import { cn } from '@utils/utils'
import { type IPropsForwardRefsUI } from '@src/types/other'

const Tabs = Root

const TabsList = forwardRef<
React.ElementRef<typeof List>,
React.ComponentPropsWithoutRef<typeof List> & IPropsForwardRefsUI
>(({ className, ...props }, ref) => (
  <List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
))
TabsList.displayName = List.displayName

const TabsTrigger = forwardRef<
React.ElementRef<typeof Trigger>,
React.ComponentPropsWithoutRef<typeof Trigger> & IPropsForwardRefsUI
>(({ className, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(
      'w-full data-[state=active]:bg-text data-[state=active]:text-foreground',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = Trigger.displayName

const TabsContent = forwardRef<
React.ElementRef<typeof Content>,
React.ComponentPropsWithoutRef<typeof Content> & IPropsForwardRefsUI
>(({ className, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
