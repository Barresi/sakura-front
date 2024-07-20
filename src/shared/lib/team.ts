import Aigul from '@assets/sakura-team/Aigul.jpg'
import Alexey from '@assets/sakura-team/Alexey.jpg'
import Boris from '@assets/sakura-team/Boris.jfif'
import Denis from '@assets/sakura-team/Denis.jpg'
import Denis2 from '@assets/sakura-team/Denis2.jfif'
import Kate from '@assets/sakura-team/Kate.jpg'
import Maria from '@assets/sakura-team/Maria.jfif'

interface ITeam {
  Aigul: string
  Alexey: string
  Boris: string
  Denis: string
  Denis2: string
  Kate: string
  Maria: string
}
export const teamPhotos: ITeam = {
  Aigul,
  Alexey,
  Boris,
  Denis,
  Denis2,
  Kate,
  Maria
}

export interface ITeammate {
  avatar: keyof ITeam
  firstName: string
  telegram: string
  desc: string
  role: string
}

export const team: ITeammate[] = [
  {
    avatar: 'Aigul',
    firstName: 'Айгуль',
    role: 'Backend Dev',
    telegram: '@aigul_tok',
    desc: 'Айгуль – наш мастер кодовых свитков. Её навыки в бэкенд-разработке обеспечивают мощь и надежность "Sakura", как крепость, защищающая наше цифровое сообщество.'
  },
  {
    avatar: 'Kate',
    firstName: 'Екатерина',
    role: 'DevOps',
    telegram: '@Assokka',
    desc: 'Екатерина, наш DevOps-дзен-мастер, отвечает за безупречную работу инфраструктуры "Sakura". Благодаря её искусству автоматизации, платформа всегда стабильна, как гора Фудзи.'
  },
  {
    avatar: 'Alexey',
    firstName: 'Алексей',
    role: 'PM',
    telegram: '@Alex130395',
    desc: 'Алексей – наш стратег и руководитель, как мудрый даймё, координирующий команду и ведя нас к успеху. Его умение управлять проектами помогает нам достигать всех поставленных целей.'
  },
  {
    avatar: 'Boris',
    firstName: 'Борис',
    role: 'UX/UI Designer',
    telegram: '@Overkast',
    desc: 'Борис – художник виртуального сада "Sakura". Его креативность и внимание к деталям превращают платформу в эстетически приятное и интуитивно понятное пространство.'
  },
  {
    avatar: 'Denis',
    firstName: 'Денис',
    role: 'Основатель, Frontend Dev',
    telegram: '@VPDenis',
    desc: 'Денис – основатель и фронтенд-воин "Sakura". Его видение и опыт создают волшебный интерфейс, который завораживает и вдохновляет пользователей.'
  },
  {
    avatar: 'Denis2',
    firstName: 'Денис',
    role: 'Frontend Dev',
    telegram: '@Dunissimmo',
    desc: 'Второй Денис – наш художник интерфейсов, превращающий "Sakura" в интерактивный и отзывчивый мир. Его работа обеспечивает превосходный пользовательский опыт, как искусный каллиграф создает свои шедевры.'
  },
  {
    avatar: 'Maria',
    firstName: 'Мария',
    role: 'QA',
    telegram: '@Maria_Kalinichenko',
    desc: 'Мария – наш самурай качества, чья задача – обеспечить безупречную работу "Sakura". Она тщательно тестирует каждую функцию, как катана проверяется на остроту, гарантируя надежность и стабильность платформы.'
  }
]
