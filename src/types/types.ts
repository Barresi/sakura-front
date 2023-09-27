// User
export interface IUser {
  id: string;
  username: string | null;
  firstname?: string;
  lastname?: string;
  email: string;
  role: "USER";
  createdAt: string;
  friends: any[];
  friendOf: IFriendOf[];
  outgoingRequests: IFriendOf[];
}

export interface IFriendOf {
  id: number;
  email: string;
}

export enum AuthStatus {
  pending = "pending",
  authorized = "authorized",
  notAuthorized = "not authorized",
}

export interface IFriend {
  img: string;
  imgFallback: string;
  name: string;
}
