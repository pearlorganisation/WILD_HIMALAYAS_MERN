import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: `${
    import.meta.env.VITE_APP_WORKING_ENVIRONMENT === "development"
      ? import.meta.env.VITE__APP_API_BASE_URL_DEVELOPMENT
      : import.meta.env.VITE__APP_API_BASE_URL_MAIN_PRODUCTION
  }`,
});
