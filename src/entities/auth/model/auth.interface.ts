import type { IUser } from "@/shared";

export type IAuthFormData = Pick<IUser, "email" | "password">;

