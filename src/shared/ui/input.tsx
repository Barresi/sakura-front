import * as React from 'react'

import { cn } from '../lib/merge-classes'

import eyeOff from '@assets/ui/Eye Off.svg'
import eye from '@assets/ui/Eye.svg'

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, error, ...props }, ref) => {
    const [inputType, setType] = React.useState(type)

    const toggleType = (): void => {
      setType((type) => (type === 'text' ? 'password' : 'text'))
    }

    const baseClass =
      'flex w-full outline-none rounded-md bg-white dark:bg-grayBlue text-signalBlack dark:text-smokyWhite border px-5 py-4 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
    const errorClass = error
      ? 'border-red focus:border-red'
      : 'border-smokyWhite dark:border-cadet focus:border-blue dark:focus:border-twitter'
    const errorSpanClass = error ? `absolute top-[3.55rem] left-5 text-red` : ''

    const input = (
      <div className='w-full relative pb-6'>
        <input
          type={inputType}
          className={cn(baseClass, errorClass, className)}
          ref={ref}
          {...props}
        />

        {error && <span className={errorSpanClass}>{error}</span>}
      </div>
    )

    if (type === 'password') {
      return (
        <div className='w-full relative'>
          {input}
          <img
            className={`cursor-pointer absolute top-[35%] translate-y-[-50%] right-[20px] transition-all hover:scale-[1.1] active:scale-[0.9]`}
            onClick={toggleType}
            src={inputType === 'text' ? eye : eyeOff}
            alt=''
          />
        </div>
      )
    }

    return input
  }
)
Input.displayName = 'Input'

export { Input }
