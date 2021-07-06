import { FormAction, IFormActionTypes } from "./types";
import { IResumePreview } from './../../models/resume';
import { ExportFormat } from "../../models/format";

export const form__setResumePreview = (resumePreview: IResumePreview | null): FormAction => ({
  type: IFormActionTypes.FORM__SET_RESUME_PREVIEW,
  payload: resumePreview,
});

export const form__setAbout = (value: string): FormAction => ({
  type: IFormActionTypes.FORM__SET_ABOUT,
  payload: value,
});

export const form__setFormat = (format: ExportFormat): FormAction => ({
  type: IFormActionTypes.FORM__SET_FORMAT,
  payload: format,
});

export const form__setLoading = (value: boolean): FormAction => ({
  type: IFormActionTypes.FORM__SET_LOADING,
  payload: value,
});