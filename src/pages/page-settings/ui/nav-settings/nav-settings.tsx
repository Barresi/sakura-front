import { ButtonTab } from '@shared/ui/button-tab'
import { type FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavSettings: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <div className='w-full xxl:w-1/3 h-fit flex flex-row bg-white dark:bg-grayBlue rounded-[10px] p-[20px] [&>div]:w-[100%] md:gap-[1rem] xxl:gap-0 xxl:p-[30px] xxl:flex-col'>
      <ButtonTab
        className={'justify-center'}
        isActive={!pathname.includes('security')}
        onClick={() => {
          navigate('')
        }}
      >
        Аккаунт
      </ButtonTab>
      <ButtonTab
        className={'justify-center'}
        isActive={pathname.includes('security')}
        onClick={() => {
          navigate('security')
        }}
      >
        Безопасность
      </ButtonTab>
    </div>
  )
}
export { NavSettings }
