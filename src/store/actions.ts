import * as FormActionCreators from "./form/actions";
import * as FormThunksCreators from "./form/thunks";
import * as ResumeActionCreators from "./resume/actions";
import * as ResumeThunksCreators from "./resume/thunks";

export const ActionCreators = {
  ...FormActionCreators,
  ...FormThunksCreators,
  ...ResumeActionCreators,
  ...ResumeThunksCreators
};
