import { combineReducers } from "redux";
import { formReducer } from "./form/reducer";
import { resumeReducer } from './resume/reducer';

export enum StoreSection {
  form = "form",
  resume = "resume",
}

export const rootReducer = combineReducers({
  [StoreSection.form]: formReducer,
  [StoreSection.resume]: resumeReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
