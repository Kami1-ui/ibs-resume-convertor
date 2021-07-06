import { ResumeAction, IResumeActionTypes } from "./types";
import { IResume } from '../../models/resume';

export const resume__setResume = (resume: IResume | null): ResumeAction => ({
  type: IResumeActionTypes.RESUME__SET_RESUME,
  payload: resume,
});
export const resume__setLoading = (value: boolean | null): ResumeAction => ({
  type: IResumeActionTypes.RESUME__SET_LOADING,
  payload: value,
});