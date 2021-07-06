import { GetState } from "../index";
import { API } from "../../API";
import { resume__setLoading, resume__setResume } from './actions';
import { ExportFormat } from "../../models/format";

export const resume__getResume = (id: string, format: ExportFormat) => async (dispatch: any, getState: GetState) => {

  dispatch(resume__setLoading(true));
  try {
    const response = await API.resume.getResumeWithFormat(id, format);
    if (response.resultCode === 1) {
      dispatch(resume__setResume(response.resume));
      dispatch(resume__setLoading(false));
    } else if (response.resultCode === 0) {
      dispatch(resume__setLoading(false));
    }
  } catch (e) {
    console.error("Ошибка при запросе...", e);
  }
};
