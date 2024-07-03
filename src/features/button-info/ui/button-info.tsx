import { type ITeammate } from '@shared/lib/types/types'
import { Button } from '@shared/ui/button'
import { ButtonSetting } from '@shared/ui/button-setting'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@shared/ui/dialog'
import { TitleGradient } from '@shared/ui/title-gradient'
import { type FC, type ReactNode } from 'react'
import { CarouselDesc } from './carousel-desc/carousel-desc'
import { CarouselTeam } from './carousel-team/carousel-team'

interface IButtonInfoProps {
  children?: ReactNode
  className?: string
}

const team: ITeammate[] = [
  {
    avatar: '',
    firstName: 'Екатерина',
    role: 'DevOps',
    telegram: '@Assokka',
    desc: 'Она обеспечивает бесперебойную работу нашего проекта, как настоящий хранитель стабильности.'
  },
  {
    avatar: '',
    firstName: 'Айгуль',
    role: 'Back-End Dev',
    telegram: '@aigul_tok',
    desc: 'Мастерство Айгуль в создании надежного и мощного back-end обеспечивает стойкость нашей платформы.'
  }
]

const ButtonInfo: FC<IButtonInfoProps> = ({ className }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ButtonSetting icon='info' className={className} />
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-7 max-w-none w-[80vw] items-center text-center'>
        {/* @ts-expect-error не рабочие пропсы у DialogHeader */}
        <DialogHeader>
          <DialogTitle>О проекте</DialogTitle>
          <p>
            Добро пожаловать в мир «Sakura» – уникального социального проекта, где каждый
            пользователь становится не просто участником, а настоящим самураем,
            исследующим долгий и увлекательный путь к своей цели. Мы гордимся представить
            нашу социальную сеть, построенную на японской тематике, где каждый член нашей
            обширной семьи имеет возможность поделиться своими историями, планами и
            предоставлять поддержку другим воинам, проходящим через аналогичные испытания.
          </p>
        </DialogHeader>
        <TitleGradient>О нашем проекте</TitleGradient>
        <p>
          «Sakura» – это не просто социальная сеть, это общество единомышленников,
          объединенных стремлением к самосовершенствованию и достижению поставленных
          целей. У нас каждый может найти своего союзника, готового поддержать в сложные
          моменты, реализовывать совместные проекты и совершенствовать свои навыки.
        </p>
        <TitleGradient>Технологический стек</TitleGradient>
        <p>
          Наши разработчики работают с высокотехнологичным стеком, включающим в себя
          Back-end технологии, такие как: Node Express Redis TypeScript Docker PostgreSQL
        </p>
        <p>а также front-end инструментарий: TypeScript React Redux Toolkit Css</p>
        <p>
          Мы используем websocket (socket.io), чтобы обеспечить быструю и надежную
          коммуникацию между нашими самураями.
        </p>
        <TitleGradient>Команда проекта</TitleGradient>
        <div></div>
        <CarouselDesc className=' hidden' />
        <CarouselTeam className=' hidden' team={team} />

        {/* @ts-expect-error не рабочие пропсы у DialogFooter */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='default'>Круто!</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export { ButtonInfo }
