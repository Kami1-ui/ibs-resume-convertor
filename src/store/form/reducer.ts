import { FormAction, IFormActionTypes } from "./types";
import { IResumePreview } from './../../models/resume';
import { ExportFormat } from "../../models/format";

const initialState = {
  resumePreview: null as null | IResumePreview,
  format: ExportFormat.withName as ExportFormat,
  about: '' as string,
  loading: false as boolean
};
type IFormState = typeof initialState;

export const formReducer = (
  state = initialState,
  action: FormAction
): IFormState => {
  switch (action.type) {
    case IFormActionTypes.FORM__SET_RESUME_PREVIEW:
      return { ...state, resumePreview: action.payload };
    case IFormActionTypes.FORM__SET_ABOUT:
      return { ...state, about: action.payload };
    case IFormActionTypes.FORM__SET_FORMAT:
      return { ...state, format: action.payload };
    case IFormActionTypes.FORM__SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
