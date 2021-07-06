import { GetState } from "../index";
import { form__setLoading, form__setResumePreview } from "./actions";
import { API } from "../../API";

export const form__getResumePreview = (id: string) => async (dispatch: any, getState: GetState) => {
  dispatch(form__setLoading(true));
  try {
    const response = await API.resume.getResume(id);
    if (response.resultCode === 1) {
      dispatch(form__setResumePreview(response.resume));
      dispatch(form__setLoading(false));
    } if (response.resultCode === 0) {
      dispatch(form__setLoading(false));
    }
  } catch (e) {
    console.error("Ошибка при запросе...", e);
  }
};
