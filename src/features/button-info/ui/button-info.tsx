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
import { TitleTechTools } from '@shared/ui/title-tech-tools'
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
    role: 'Backend Dev',
    telegram: '@aigul_tok',
    desc: 'Мастерство Айгуль в создании надежного и мощного back-end обеспечивает стойкость нашей платформы.'
  },
  {
    avatar: '',
    firstName: 'Екатерина',
    role: 'DevOps',
    telegram: '@Assokka',
    desc: 'Она обеспечивает бесперебойную работу нашего проекта, как настоящий хранитель стабильности.'
  },
  {
    avatar: '',
    firstName: 'Алексей',
    role: 'PM',
    telegram: '@Alex130395',
    desc: 'Наш руководитель проекта, который координирует усилия всей команды и следит за достижением наших целей.'
  },
  {
    avatar: '',
    firstName: 'Борис',
    role: 'UX/UI Designer',
    telegram: '@Overkast',
    desc: 'Создатель уникального визуального облика «Sakura», который делает наше приложение не только функциональным, но и красочным.'
  },
  {
    avatar: '',
    firstName: 'Денис',
    role: 'Основатель, Frontend Dev',
    telegram: '@VPDenis',
    desc: 'Денис отвечает за общее направление и стратегию проекта, а также активно участвует в разработке front-end.'
  },
  {
    avatar: '',
    firstName: 'Денис',
    role: 'Frontend Dev',
    telegram: '@Dunissimmo',
    desc: 'Второй Денис работает над созданием интерактивных и отзывчивых интерфейсов, обеспечивая пользователям превосходный опыт взаимодействия с приложением.'
  },
  {
    avatar: '',
    firstName: 'Мария',
    role: 'QA',
    telegram: '@Maria_Kalinichenko',
    desc: 'Мария – это наш гарант качества. Она тщательно тестирует каждую функцию и обновление "Sakura", чтобы убедиться, что все работает безупречно.'
  }
]

const backTools = ['Node', 'Express', 'Redis', 'TypeScript', 'Docker', 'PostgreSQL']
const frontTools = ['TypeScript', 'React', 'Redux Toolkit', 'Tailwind', 'Shadcn UI']

const ButtonInfo: FC<IButtonInfoProps> = ({ className }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ButtonSetting icon='info' className={className} />
      </DialogTrigger>
      <DialogContent className=' max-w-none w-[98vw] md:w-[80vw] xl:w-[900px] '>
        <DialogTitle>О проекте</DialogTitle>

        <div className='flex flex-col gap-7 overflow-auto  max-h-[82vh] mx-1'>
          <p>
            Добро пожаловать в мир <b className='tracking-wider'>«Sakura»</b> -
            уникального некоммерческого проекта, созданного сообществом энтузиастов. Мы
            гордимся представить нашу социальную сеть. Мы создали место, где каждый может
            раскрыть свой потенциал и вместе с другими участниками реализовывать
            совместные идеи. Мы не стремились к финансовой прибыли. Цель нашего проекта -
            продемонстрировать и доказать, что даже некоммерческие инициативы способны
            создавать продукты и достигать скромных, но все же результатов.
          </p>
          <TitleGradient>О нашем проекте</TitleGradient>
          <p>
            <b className='tracking-wider'>«Sakura»</b> - это социальная сеть, где каждый
            пользователь становится самураем, преодолевающим долгий и тернистый путь к
            достижению своих целей. Здесь каждый пользователь может делиться своими
            историями, планами и идеями с другими пользователями. Среди функционала{' '}
            <b className='tracking-wider'>«Sakura»</b> - чаты, возможность добавить
            другого пользователя в друзья, система уведомлений, настройка аккаунта,
            редактирование профиля, просмотр новостей и многое другое. Наша социальная
            сеть вдохновлена духом самураев и их стремлением к совершенству.
          </p>
          <TitleGradient>Технологический стек</TitleGradient>
          <p>
            Мы использовали передовые технологии веб-разработки, чтобы обеспечить удобство
            и безопасность нашим пользователям:
            <br />
            <br />
            Frontend:{' '}
            <div className='inline-flex gap-1 flex-wrap '>
              {frontTools.map((item, ind) => (
                <TitleTechTools key={ind}>{item}</TitleTechTools>
              ))}
            </div>
          </p>
          <p>
            Backend:{' '}
            <div className='inline-flex gap-1 flex-wrap '>
              {backTools.map((item, ind) => (
                <TitleTechTools key={ind}>{item}</TitleTechTools>
              ))}
            </div>
          </p>
          <p>
            Мы используем <TitleTechTools>websocket (socket.io)</TitleTechTools>, чтобы
            обеспечить быструю и надежную коммуникацию между нашими пользователями.
          </p>

          <TitleGradient>Команда проекта</TitleGradient>
          <CarouselTeam className=' lg:hidden' team={team} />
          <div className='hidden lg:flex  flex-col gap-[5px]'>
            {team.map((teammate, ind) => (
              <CardTeammate {...teammate} key={ind} isMobile={false} />
            ))}
          </div>
          <p className='text-center'>
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
