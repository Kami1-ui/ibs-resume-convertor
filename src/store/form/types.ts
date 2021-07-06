import { ExportFormat } from "../../models/format";
import { IResumePreview } from "../../models/resume";

export enum IFormActionTypes {
  FORM__SET_RESUME_PREVIEW = "[FORM] SET_RESUME_PREVIEW",
  FORM__SET_ABOUT = "[FORM] SET_ABOUT",
  FORM__SET_FORMAT = "[FORM] SET_FORMAT",
  FORM__SET_LOADING = "[FORM] SET_LOADING",
  FORM__SET_TODO = "[FORM] SET_TODO",
}

// Типы ActionCreators
interface SetResumePreviewAction {
  type: IFormActionTypes.FORM__SET_RESUME_PREVIEW;
  payload: IResumePreview | null;
}
interface SetAboutAction {
  type: IFormActionTypes.FORM__SET_ABOUT;
  payload: string;
}
interface SetFormatAction {
  type: IFormActionTypes.FORM__SET_FORMAT;
  payload: ExportFormat;
}
interface SetLoadingAction {
  type: IFormActionTypes.FORM__SET_LOADING;
  payload: boolean;
}


// Общий тип Action
export type FormAction =
  | SetResumePreviewAction
  | SetFormatAction
  | SetLoadingAction
  | SetAboutAction;
