import { forwardRef } from 'react'
import { cn } from '../lib/merge-classes'

export interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, error, ...props }, ref) => {
    const baseClass =
      'flex min-h-[100px] outline-none bg-white dark:bg-grayBlue text-signalBlack dark:text-smokyWhite w-full rounded-md border border-smokyWhite dark:border-cadet p-4 text-sm placeholder:text-cadetBlue disabled:cursor-not-allowed disabled:opacity-50  '
    const errorClass = error
      ? 'border-red focus:border-red'
      : 'border-smokyWhite dark:border-cadet'
    const errorSpanClass =
      'absolute bottom-[-1rem] left-5 text-input-errorBorder text-red'

    return (
      <div className='w-full relative pb-6'>
        <textarea className={cn(baseClass, errorClass, className)} ref={ref} {...props} />
        <span className={errorSpanClass}>{error}</span>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
