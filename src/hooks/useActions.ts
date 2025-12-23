import { rootActions } from "@/store/root-actions";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
  const dispach = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispach), [dispach]);
};
