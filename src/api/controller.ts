import axios from "axios";
import { baseUrl } from "./connection";
import { loginUserQuery } from "./query";

export const loginUser = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: loginUserQuery,
        variables: {
          email,
          password,
        },
      })
      .then((response) => {
        debugger;
        if (response?.data?.data?.loginUser) {
          resolve(response.data.data.loginUser);
        } else {
          reject("User not found");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
