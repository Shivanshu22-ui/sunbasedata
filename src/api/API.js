import { createContext } from "react";
import { openAxiosInstance } from "./instances";

const auth ={
    login: (data) => {
        return openAxiosInstance.post(`assignment_auth.jsp`,data);
      },
}

export const api = {
    ...auth,
  };
export const Context = createContext();