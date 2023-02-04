// эти хуки нужны только для того, что бы один раз решить вопрос с типами
// хотя можно это и не делать - useDispatch<AppDispatch>
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


