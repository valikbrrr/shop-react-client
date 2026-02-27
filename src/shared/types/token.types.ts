export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export enum EnumStorage {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
  USER = "user",
}