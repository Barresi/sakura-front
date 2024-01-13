import { NotificationTypeEnum } from '@shared/lib/types/api'

export const friendActions = {
  [NotificationTypeEnum.sendFriendRequest]: 'Подал Вам заявку в друзья',
  [NotificationTypeEnum.acceptFriendRequest]: 'Принял Вашу заявку в друзья',
  [NotificationTypeEnum.rejectFriend]: 'Отклонил Вашу заявку в друзья',
  [NotificationTypeEnum.getMessage]: 'Написал Вам личное сообщение'
}
