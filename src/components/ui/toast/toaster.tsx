import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@src/components/ui/toast/toast'
import { useToast } from './use-toast'
import { type FC } from 'react'

const Toaster: FC = () => {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast className='' key={id} {...props}>
            <div className='w-full grid gap-1'>
              <div className='flex items-center justify-between mb-[5px]'>
                {title ? <ToastTitle className=''>{title}</ToastTitle> : <div></div>}
                <ToastClose />
              </div>
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
export default Toaster
