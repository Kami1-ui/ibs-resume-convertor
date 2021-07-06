import { ResumeAction, IResumeActionTypes } from "./types";
import { IResume } from '../../models/resume';

const initialState = {
  data: null as null | IResume,
  loading: null as null | boolean
};
type IResumeState = typeof initialState;

export const resumeReducer = (
  state = initialState,
  action: ResumeAction
): IResumeState => {
  switch (action.type) {
    case IResumeActionTypes.RESUME__SET_RESUME:
      return { ...state, data: action.payload };
    case IResumeActionTypes.RESUME__SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
