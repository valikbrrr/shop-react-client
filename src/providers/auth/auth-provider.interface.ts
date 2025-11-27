import type { IUser } from "@/types/user.interface"
import type { Dispatch, SetStateAction } from "react"

export type TypeUserState = IUser | null

export interface IContext {
  user: TypeUserState,
  setUser: Dispatch<SetStateAction<TypeUserState>>
}