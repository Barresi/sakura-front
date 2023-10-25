export interface IUser {
  id: string;
  username: string | null;
  firstName?: string;
  lastName?: string;
  email: string;
  friends: any[];
  friended: any[];
  received: any[];
}

export interface ISendRequestResponse {
  id: number;
  fromId: number;
  toId: number;
  status: SendRequestStatus;
  createdAt: string;
}

export enum SendRequestStatus {
  pending = "PENDING",
  accepted = "ACCEPTED",
  rejected = "REJECTED",
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
