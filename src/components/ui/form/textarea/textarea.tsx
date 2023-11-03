import { forwardRef } from 'react'
import { cn } from '@utils/utils'

export interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, error, ...props }, ref) => {
    const baseClass =
      'flex min-h-[100px] outline-none bg-input-background text-input-foreground w-full rounded-md border border-input p-5 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:border-input-hoverBorder'
    const errorClass = error
      ? 'border-input-errorBorder focus:border-input-errorBorder'
      : 'border-input focus:border-input-hoverBorder'
    const errorSpanClass = error
      ? 'absolute bottom-[-1rem] left-5 text-input-errorBorder'
      : ''
    return (
      <div className='w-full relative pb-6'>
        <textarea className={cn(baseClass, errorClass, className)} ref={ref} {...props} />
        <span className={errorSpanClass}>{error}</span>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export default Textarea
