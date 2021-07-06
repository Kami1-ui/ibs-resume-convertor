import { IResume } from "../../models/resume";

export enum IResumeActionTypes {
  RESUME__SET_RESUME = "[RESUME] SET_RESUME",
  RESUME__SET_LOADING = "[RESUME] SET_LOADING",
}

// Типы ActionCreators
interface SetResumeAction {
  type: IResumeActionTypes.RESUME__SET_RESUME;
  payload: IResume | null;
}
interface SetLoadingAction {
  type: IResumeActionTypes.RESUME__SET_LOADING;
  payload: boolean | null;
}


// Общий тип Action
export type ResumeAction =
  | SetLoadingAction
  | SetResumeAction;
