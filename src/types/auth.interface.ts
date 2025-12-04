import type { IUser } from "./user.interface";

export type IAuthFormData = Pick<IUser, "email" | "password">;

export enum EnumStorage {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
  USER = "user",
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}