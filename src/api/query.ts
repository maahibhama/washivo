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

const signUpQuery = `
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

const getAllUsersQuery = `{
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
}`

export {
  loginUserQuery,
  signUpQuery,
  getUserQuery,
  getAllUsersQuery
};
