import like from '@assets/ui/Like.svg'
import likeActive from '@assets/ui/Like Active.svg'
import likeActiveDark from '@assets/ui/Like Active Dark.svg'
import comment from '@assets/ui/Comment.svg'
import clear from '@assets/ui/Clear.svg'
import share from '@assets/ui/Share.svg'
import friends from '@assets/menu/friends.svg'
import message from '@assets/menu/message.svg'
import news from '@assets/menu/news.svg'
import photos from '@assets/menu/photos.svg'
import user from '@assets/menu/user.svg'
import {
  edit,
  setting,
  notification,
  theme,
  darkTheme,
  exit,
  add,
  info,
  deleteFriend
} from '@src/shared/assets/icons/icons'

export const icons = {
  edit,
  setting,
  notification,
  theme,
  darkTheme,
  info,
  exit,
  like,
  likeActive,
  likeActiveDark,
  comment,
  share,
  user,
  news,
  friends,
  message,
  photos,
  add,
  clear,
  deleteFriend
}

export type Icon = keyof typeof icons
