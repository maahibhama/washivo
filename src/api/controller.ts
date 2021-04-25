import axios from "axios";
import { baseUrl } from "./connection";
import {
  loginUserQuery,
  signUpQuery,
  getUserQuery,
  getAllUsersQuery,
  getBookingQuery,
  getAllBookingsQuery,
  getPlanByNameQuery,
  getAllPlansQuery,
  getVehicalByNameQuery,
  getAllVehicalsQuery
}
  from "./query";

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

const signUpUser = (name: string,
  email: string,
  password: string,
  address: string,
  city: string,
  gender: string,
  phoneNumber: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: signUpQuery,
        variables: {
          name,
          email,
          password,
          address,
          city,
          gender,
          phoneNumber
        },
      }).then(response => {
        debugger;
        console.log(response);
        resolve(response.data);

      })
      .catch(error => {
        reject(error);
      })
  });
}

const getUserById = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getUserQuery,
        variables: {
          id
        },
      }).then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });

}

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getAllUsersQuery,
        variables: {
        },
      }).then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });

}

const getBookingById = (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getBookingQuery,
        variables: {
          id
        },
      }).then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });

}

const getAllBookings = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getAllBookingsQuery,
        variables: {

        },
      }).then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });

}

const getPlanByName = (name: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getPlanByNameQuery,
        variables: {
          name
        },
      }).then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });

}

const getAllPlans = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getAllPlansQuery,
        variables: {

        },
      }).then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });
}

const getVehicalByName = (name: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getVehicalByNameQuery,
        variables: {
          name
        },
      }).then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });
}

const getAllVehicals = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getAllVehicalsQuery,
        variables: {

        },
      }).then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  });

}



export {
  loginUser,
  signUpUser,
  getUserById,
  getAllUsers,
  getBookingById,
  getAllBookings,
  getPlanByName,
  getAllPlans,
  getVehicalByName,
  getAllVehicals
};
