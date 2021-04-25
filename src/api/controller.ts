import axios from "axios";
import { baseUrl } from "./connection";
import {
  loginUserQuery,
  signUpMutation,
  getUserQuery,
  getAllUsersQuery,
  getBookingQuery,
  getAllBookingsQuery,
  getPlanByNameQuery,
  getAllPlansQuery,
  getVehicalByNameQuery,
  getAllVehicalsQuery,
  getSlotByIdQuery,
  getAllSlotsQuery,
  editUserMutation
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
        query: signUpMutation,
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

const getSlotByIdStartTime = (id: string, startTime: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getSlotByIdQuery,
        variables: {
          id,
          startTime
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

const getAllSlots = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: getAllSlotsQuery,
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

const editUser = (id: string,
  name: string,
  email: string,
  password: string,
  address: string,
  city: string,
  gender: string,
  phoneNumber: string,
  type: string
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl, {
        query: editUserMutation,
        variables: {
          id,
          name,
          email,
          password,
          address,
          city,
          gender,
          phoneNumber,
          type,
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
  getAllVehicals,
  getSlotByIdStartTime,
  getAllSlots,
  editUser
};
