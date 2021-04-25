import axios from "axios";
import { baseUrl } from "./connection";
import { loginUserQuery, bookingQuery } from "./query";

const loginUser = (email: string, password: string) => {
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

const addBookingQuery = (
  name: string,
  orignalprice: string,
  discountInPercentage: string,
  description: string,
  category: string,
  company: string,
  type: string,
  rating: string,
  ratingType: string,
  availableSize: [string],
  availableColor: [string]
) => {
  axios.post(baseUrl, {
    query: bookingQuery,
    variables: {
      name,
      orignalprice,
      discountInPercentage,
      description,
      category,
      company,
      type,
      rating,
      ratingType,
      availableSize,
      availableColor,
    },
  }).then(response => {
    console.log(response);
    debugger;
  })
};

export { loginUser, addBookingQuery };
