import axios, { AxiosRequestConfig, Method } from "axios";
import { useSelector } from "react-redux";
import { MainUrl } from "../utils/MainUrl";

// const API_URL = process.env.REACT_APP_API_URL
const MOCK_API_URL = ""; // will add later mock api url once will setup test configuration

export const mockApiClient = axios.create({
  baseURL: MOCK_API_URL,
});

const baseURL = MainUrl;
export const baseApiClient = axios.create({
  baseURL: MainUrl,
});

const codes = {
  UNAUTHORIZED: 401,
  CUSTOM_TOKEN_EXPIRED: -2,
  REQUEST_TIMEOUT: 408,
  ECONNABORTED: "ECONNABORTED",
};

const setUpInterceptor = (store: any) => {
  console.log(
    "🚀 ~ file: axiosConnec.ts:25 ~ setUpInterceptor ~ store",
    store?.getState()?.SignInDetails?.accessToken
  );
  baseApiClient.interceptors.request.use((config: any) => {
    const token = store?.getState()?.SignInDetails?.accessToken;
    if (token === null) {
      config.headers["No auth"];
    } else {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  });

  baseApiClient.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      if (error?.response?.data?.error?.code === codes.CUSTOM_TOKEN_EXPIRED) {
        //Looks like token expired
      }

      if (
        error?.response?.status === codes.REQUEST_TIMEOUT ||
        error.code === codes.ECONNABORTED
      ) {
        //Looks like the server is taking to long to respond, please try again in sometime.
      }

      if (!error?.response?.data?.error) {
        //Add something went wrong toast error here
        //statusText in toast maybe.
      }
      return Promise.reject(error);
    }
  );
};

export default setUpInterceptor;

export type Irequest = {
  subUrl: string;
  method?: Method;
  data?: object;
  header?: object;
};

export const contentTypes = {
  multipart: {
    "Content-Type": "multipart/form-data",
  },
  json: {
    "Content-Type": "application/json",
  },
};

const getCommonHeaders = () => {
  return {
    ...contentTypes.json,
    // headers: {Authorization: `Bearer ${token?.accessToken}`},
  };
};

const commonFetch = (request: Irequest) => {
  const { subUrl, method, data = {}, header = {} } = request;
  const commonHeaders = getCommonHeaders();
  return baseApiClient({
    method,
    url: subUrl,
    data,
  });
};

export const GET = async (request: Irequest) => {
  console.log("====================================");
  console.log("qwerty");
  console.log("====================================");
  //   return await commonFetch({ method: 'GET', ...request })
};

export const POST = (request: Irequest) => {
  return commonFetch({ method: "post", ...request });
};

export const PUT = (request: Irequest) => {
  return commonFetch({ method: "put", ...request });
};

export const PATCH = (request: Irequest) => {
  return commonFetch({ method: "patch", ...request });
};

export const DELETE = (request: Irequest) => {
  return commonFetch({ method: "delete", ...request });
};
