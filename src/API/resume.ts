import { AxiosInstance } from "axios";
import { IResume, IResumePreview } from '../models/resume';
import { ExportFormat } from '../models/format';

type IResumePreviewResponse = {
  resultCode: number;
  resume: IResumePreview;
  message: string;
}

type IResumeResponse = {
  resultCode: number;
  resume: IResume;
  message: string;
}

export class ApiResume {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  getResume = (id: string) =>
    this.axios.get<IResumePreviewResponse>(`/resume/${id}`).then((d) => d.data);

  getResumeWithFormat = (id: string, format: ExportFormat) =>
    this.axios.get<IResumeResponse>(`/resume/${id}/${format}`).then((d) => d.data);
}
