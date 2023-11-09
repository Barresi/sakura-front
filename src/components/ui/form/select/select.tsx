import { Check, ChevronDown } from 'lucide-react'

import { forwardRef } from 'react'
import {
  Content,
  Group,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  Root as SelectRoot,
  Separator,
  Trigger,
  Value
} from '@radix-ui/react-select'
import {
  Root as ScrollRoot,
  Scrollbar,
  Thumb,
  Viewport
} from '@radix-ui/react-scroll-area'
import { cn } from '@utils/utils'
import { type IPropsForwardRefsUI } from '@src/types/props'

const Select = SelectRoot

const SelectGroup = Group

const SelectValue = Value

const SelectTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger> & IPropsForwardRefsUI
>(({ className, children, ...props }, ref) => (
  <Trigger
    ref={ref}
    className={cn(
      'flex w-full items-center justify-between rounded-[1px] border border-input bg-background p-4 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    {children}
    <Icon asChild>
      <ChevronDown className='h-4 w-4 opacity-50' />
    </Icon>
  </Trigger>
))
SelectTrigger.displayName = Trigger.displayName

const SelectContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & IPropsForwardRefsUI
>(({ className, children, position = 'popper', ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-[1px] border bg-select text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <ScrollRoot className='w-full overflow-hidden bg-[rgba(34,34,46,1)]' type='auto'>
        <Viewport
          className={cn(
            'bg-select',
            position === 'popper' &&
              'max-h-[32vh] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
          asChild
        >
          <Viewport className='w-full h-full rounded-inherit'>{children}</Viewport>
        </Viewport>

        <Scrollbar className='flex p-[2px] data-[orientation=vertical]:w-[10px] data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[10px]'>
          <Thumb className='flex-[1] bg-[rgba(210,40,40,1)] rounded-[50px] relative' />
        </Scrollbar>
      </ScrollRoot>
    </Content>
  </Portal>
))
SelectContent.displayName = Content.displayName

const SelectLabel = forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label> & IPropsForwardRefsUI
>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
))
SelectLabel.displayName = Label.displayName

const SelectItem = forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item> & IPropsForwardRefsUI
>(({ className, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'relative flex w-full min-h-[40px] cursor-pointer select-none items-center rounded-[1px] py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-select-itemHover focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <ItemIndicator>
        <Check className='h-4 w-4' />
      </ItemIndicator>
    </span>

    <ItemText>{children}</ItemText>
  </Item>
))
SelectItem.displayName = Item.displayName

const SelectSeparator = forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator> & IPropsForwardRefsUI
>(({ className, ...props }, ref) => (
  <Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
))
SelectSeparator.displayName = Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
}
