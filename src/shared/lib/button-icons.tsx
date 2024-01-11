// static icons
import friends from '@assets/menu/friends.svg'
import message from '@assets/menu/message.svg'
import news from '@assets/menu/news.svg'
import photos from '@assets/menu/photos.svg'
import user from '@assets/menu/user.svg'
import clear from '@assets/ui/Clear.svg'
import comment from '@assets/ui/Comment.svg'
import likeActiveDark from '@assets/ui/Like Active Dark.svg'
import likeActive from '@assets/ui/Like Active.svg'
import like from '@assets/ui/Like.svg'
import share from '@assets/ui/Share.svg'

// dynamic icons
import Add from '@assets/icons/add.svg?react'
import DarkTheme from '@assets/icons/darkTheme.svg?react'
import DeleteFriend from '@assets/icons/deleteFriend.svg?react'
import Edit from '@assets/icons/edit.svg?react'
import Exit from '@assets/icons/exit.svg?react'
import Info from '@assets/icons/info.svg?react'
import Notification from '@assets/icons/notification.svg?react'
import Setting from '@assets/icons/setting.svg?react'
import Theme from '@assets/icons/theme.svg?react'

export const icons = {
  edit: <Edit />,
  setting: <Setting />,
  notification: <Notification />,
  theme: <Theme />,
  darkTheme: <DarkTheme />,
  info: <Info />,
  exit: <Exit />,
  add: <Add />,
  deleteFriend: <DeleteFriend />,
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
  clear
}

export type Icon = keyof typeof icons
