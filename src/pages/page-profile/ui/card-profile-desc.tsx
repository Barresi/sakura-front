import { type FC } from 'react'

import CalenderIcon from './svg/Calendar.svg'
import LoacationIcon from './svg/Location Point.svg'
import UserIcon from './svg/User.svg'
import BankIcon from './svg/bank.svg'

const desc = [
  { text: 'Москва', icon: LoacationIcon },
  { text: 'Мужской', icon: UserIcon },
  { text: 'overcast', icon: BankIcon },
  { text: '20.05.1995', icon: CalenderIcon }
]

const CardProfileDesc: FC = () => {
  return (
    <div className={'flex flex-wrap gap-[10px] xxl:flex-col'}>
      {desc.map((item, ind) => (
        <p key={ind} className='flex gap-[5px] text-[16px]'>
          <img src={item.icon} /> {item.text}
        </p>
      ))}
    </div>
  )
}
export { CardProfileDesc }
