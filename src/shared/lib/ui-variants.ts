import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'w-[25px] h-[25px] flex items-center justify-center text-center text-[12px] font-bold leading-[16px] rounded-full',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-red text-white',
        secondary:
          'border-transparent bg-smokyWhite dark:bg-brownBlack text-cadet dark:text-smokyWhite',
        destructive: 'border-transparent',
        outline: 'text-signalBlack dark:text-ghostlyWhite'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export const buttonVariants = cva(
  'w-full inline-flex items-center justify-center gap-[5px] rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transition-all active:scale-[0.95]',
  {
    variants: {
      variant: {
        default: 'bg-red text-white dark:text-white hover:bg-redHover border-none',
        secondary:
          'bg-smokyWhite dark:bg-brownBlack text-cadet dark:text-smokyWhite border border-smokyWhite dark:border-brownBlack hover:border-cadet dark:hover:border-grayBlue dark:hover:bg-grayBlue',
        outline: 'text-black dark:text-white border-2 border-darkElectricBlue',
        link: 'text-cadet dark:text-darkWhite underline-offset-4 hover:text-twitter dark:hover:text-twitter',
        text: 'text-signalBlack dark:text-smokyWhite'
      },
      size: {
        default: 'h-10 px-[0.95rem] py-[0.625rem]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export const toastVariants = cva(
  'group pointer-events-auto relative flex items-center justify-between space-x-4 overflow-hidden rounded-[10px] border dark:border-signalBlack p-[20px] shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:lg:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-[#292929E5] text-white',
        destructive: 'destructive group'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export const sheetVariants = cva(
  'absolute z-[1000] gap-4 bg-white overflow-y-scroll rounded-[10px] dark:bg-brownBlack p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-[500s] data-[state=open]:duration-[700s]',
  {
    variants: {
      side: {
        top: 'top-0 right-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        right:
          'inset-y-0 right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
      }
    },
    defaultVariants: {
      side: 'right'
    }
  }
)
