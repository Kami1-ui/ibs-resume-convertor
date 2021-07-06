import axios, { AxiosInstance } from "axios";
import { ApiResume } from "./resume";

class Api {
  private axios: AxiosInstance;
  resume: ApiResume;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.resume = new ApiResume(axios);
  }
}

//главный объект для запросов
let API: Api;
const createAPI = (headers = {}) => {
  API = new Api(
    axios.create({
      baseURL: "http://localhost:3007/",//"http://back5.apps.ocp4.trainee.ru.com/",
      // withCredentials: true, 
      // headers: {
      //   //  "Authorization": "API_KEY"
      // },
    })
  );
};

createAPI({});

export { API, createAPI };

export enum HTTP_STATUS {
  AppError = 100,
  ServerError = 500,
  Access = 200,
  Error = 400,
  Unauthorized = 401,
  Forbidden = 403,
  BadRequest = 400,
  NotFound = 404,
}
