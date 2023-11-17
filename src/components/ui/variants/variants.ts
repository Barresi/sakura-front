import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'w-[25px] h-[25px] flex items-center justify-center text-center text-[12px] font-bold leading-[16px] rounded-full border',
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
        outline:
          'text-cadet dark:text-cadetBlue border border-cadet dark:border-darkGray bg-white dark:bg-grayBlue hover:border-cadetBlue dark:hover:border-cadet hover:text-cadetBlue dark:hover:text-cadet',
        link: 'text-cadet dark:text-darkWhite underline-offset-4 hover:text-twitter dark:hover:text-twitter',
        text: 'text-signalBlack dark:text-smokyWhite hover:bg-smokyWhite dark:hover:bg-brownBlack'
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
