import { NotificationTypeEnum } from './types/api'

export const friendActions = {
  [NotificationTypeEnum.sendFriendRequest]: 'подал(а) Вам заявку в друзья',
  [NotificationTypeEnum.acceptFriendRequest]: 'принял(а) Вашу заявку в друзья',
  [NotificationTypeEnum.rejectFriend]: 'отклонил(а) Вашу заявку в друзья',
  [NotificationTypeEnum.getMessage]: 'написал(а) Вам личное сообщение'
}
