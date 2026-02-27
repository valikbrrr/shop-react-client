import type { ITokens } from "./token.types";
import type { IUser } from "./user.types";

export interface IAuthResponse extends ITokens {
  user: IUser;
}
