const loginUserQuery = `
    query($email: String!, $password: String!) {
      loginUser(email: $email, password: $password){
        id
        name
        email
        address
        type
        phoneNumber
      }
    }`;

const signUpMutation = `
mutation(
  $name: String!
  $email: String!
  $password: String!
  $address: String
  $city: String
  $gender: String
  $phoneNumber: String
  $type: String){
    addUser(
      name: $name
      email: $email
      password: $password
      address: $address
      city: $city
      gender: $gender
      phoneNumber: $phoneNumber
      type: $type){
        id
        name
        email
        address
        type
        phoneNumber
      }
  }
`;

const getUserQuery = `
  query($id: String!){
    user(id: $id){
      id
      name
      email
      address
      type
      phoneNumber
    }
  }
`;

const getAllUsersQuery = `
  query{
    users{
      id
      name
      email
      address
      type
      phoneNumber
    }
  }
`

const getBookingQuery = `
  query($id: String!){
    booking(id: $id){
      id
      slot_id
      price
      description
      payment_mode
      payment_status
      status
      washer_rating
      plan_rating
      washer_rating_comment
      plan_rating_comment
    }
  }
`;

const getAllBookingsQuery = `
  query{
    bookings{
      id
      slot_id
      price
      description
      payment_mode
      payment_status
      status
      washer_rating
      plan_rating
      washer_rating_comment
      plan_rating_comment
    }
  }
`;

const getPlanByNameQuery = `
  query($id: String!){
    plan(id: $id){
      name
      description
      price
      rating
      rating_comments
    }
  }
`;

const getAllPlansQuery = `
  query{
    plan{
      name
      description
      price
      rating
      rating_comments
    }
  }
`;

const getVehicalByNameQuery = `
  query($name: String){
    vehical(name: $name){
      name
	    type
	    brand
	    year
	    vehical_no
	    client_id
	    slots
    }
  }
`;

const getAllVehicalsQuery = `
  query{
    vehicals{
      name
	    type
	    brand
	    year
	    vehical_no
	    client_id
	    slots
    }
  }
`;

const getSlotByIdQuery = `
  query($id: String!, $startTime: String!){
    slot(id: $id, startTime: $startTime){
      id
      startTime
      durationInMinutes
      washer_id
      client_id
      vehical_id
      availablity
      plan_id
      booking_id
      status
    }
  }
`;

const getAllSlotsQuery = `
  query{
    slots{
      id
      startTime
      durationInMinutes
      washer_id
      client_id
      vehical_id
      availablity
      plan_id
      booking_id
      status
    }
  }
`;


export {
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
  getAllSlotsQuery
};

