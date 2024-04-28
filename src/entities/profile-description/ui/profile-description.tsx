import { type FC } from 'react'

import CalenderIcon from './Calendar.svg'
import LoacationIcon from './Location Point.svg'
import UserIcon from './User.svg'
import BankIcon from './bank.svg'

const desc = [
  { text: 'Москва', icon: LoacationIcon },
  { text: 'Мужской', icon: UserIcon },
  { text: 'overcast', icon: BankIcon },
  { text: '20.05.1995', icon: CalenderIcon }
]

const ProfileDescription: FC = () => {
  return (
    <div className={'flex flex-wrap gap-[10px]'}>
      {desc.map((item, ind) => (
        <p key={ind} className='flex gap-[5px] text-[16px]'>
          <img src={item.icon} /> {item.text}
        </p>
      ))}
    </div>
  )
}
export { ProfileDescription }
