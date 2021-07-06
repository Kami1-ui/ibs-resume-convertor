import { FormAction } from "./form/types";
import { ResumeAction } from "./resume/types";

export type IAction = FormAction & ResumeAction;
