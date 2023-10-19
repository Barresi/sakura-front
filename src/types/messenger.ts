export interface IMessage {
  text: string;
  date: string;
  userId: string;
}
export interface IChat {
  name: string;
  chatId: string;
  unreadMessages: IMessage[];
  lastMessage: IMessage;
}
