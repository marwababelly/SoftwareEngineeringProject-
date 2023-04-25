import axios from "axios";
import { API_BASE_URL } from "./domain";
import useUserStore from "../zustand/user/user.store";
import Loading from "../components/base/loading/loading";

const ApiInstance = axios.create({
  baseURL: API_BASE_URL,
});

ApiInstance.interceptors.request.use(
  (config) => {
    <Loading />;
    if (config.headers) {
      const token = useUserStore.getState().userInfo?.token;
      if (token) config.headers.Authorization = token;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

ApiInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
export default ApiInstance;
