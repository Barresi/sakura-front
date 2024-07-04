import { CardTeammate } from '@entities/card-teammate/ui/card-teammate'
import { type ITeammate } from '@shared/lib/types/types'
import { Button } from '@shared/ui/button'
import { ButtonSetting } from '@shared/ui/button-setting'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '@shared/ui/dialog'
import { TitleGradient } from '@shared/ui/title-gradient'
import { type FC, type ReactNode } from 'react'
import { CarouselTeam } from './carousel-team/carousel-team'

interface IButtonInfoProps {
  children?: ReactNode
  className?: string
}

const team: ITeammate[] = [
  {
    avatar: '',
    firstName: 'Айгуль',
    role: 'Back-End Dev',
    telegram: '@aigul_tok',
    desc: 'Мастерство Айгуль в создании надежного и мощного back-end обеспечивает стойкость нашей платформы.'
  },
  {
    avatar: '',
    firstName: 'Екатерина',
    role: 'DevOps',
    telegram: '@Assokka',
    desc: 'Она обеспечивает бесперебойную работу нашего проекта, как настоящий хранитель стабильности.'
  }
]

const ButtonInfo: FC<IButtonInfoProps> = ({ className }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ButtonSetting icon='info' className={className} />
      </DialogTrigger>
      <DialogContent className=' max-w-none w-[98vw] md:w-[80vw] xl:w-[900px] '>
        <DialogTitle>О проекте</DialogTitle>

        <div className='flex flex-col gap-7 overflow-auto items-center text-center max-h-[82vh]'>
          <p>
            Добро пожаловать в мир «Sakura» – уникального социального проекта, где каждый
            пользователь становится не просто участником, а настоящим самураем,
            исследующим долгий и увлекательный путь к своей цели. Мы гордимся представить
            нашу социальную сеть, построенную на японской тематике, где каждый член нашей
            обширной семьи имеет возможность поделиться своими историями, планами и
            предоставлять поддержку другим воинам, проходящим через аналогичные испытания.
          </p>

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
            Back-end технологии, такие как: Node Express Redis TypeScript Docker
            PostgreSQL
            <br />
            а также front-end инструментарий: TypeScript React Redux Toolkit Css
            <br />
            Мы используем websocket (socket.io), чтобы обеспечить быструю и надежную
            коммуникацию между нашими самураями.
          </p>

          <TitleGradient>Команда проекта</TitleGradient>
          <CarouselTeam className=' lg:hidden' team={team} />
          <div className='hidden lg:flex  flex-col gap-[5px]'>
            {team.map((teammate, ind) => (
              <CardTeammate {...teammate} key={ind} isMobile={false} />
            ))}
          </div>

          <p>
            Присоединяйтесь к нам в «Sakura» и станьте частью этого захватывающего
            путешествия к самосовершенствованию. Вместе мы сможем достичь великих высот и
            создать уникальное сообщество самураев!
          </p>

          {/* @ts-expect-error не рабочие пропсы у DialogFooter */}
          <DialogFooter className='w-full'>
            <DialogClose asChild>
              <Button variant='default'>Круто!</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export { ButtonInfo }
