import type { RootState } from "@/app/store"; // ⚠️ ЧЕСТНО ПОСЛЕДНЕЕ ЕДИНСТВЕННОЕ НАРУШЕНИЕ!
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
