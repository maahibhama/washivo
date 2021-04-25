const loginUserQuery = `
    query($email: String!, $password: String!) {
      loginUser(email: $email, password: $password){
        id
        name
        email
      }
    }`;

const signUpQuery = `
addUser(
  name: String!
  email: String!
  password: String!
  address: String
  city: String
  gender: String
  phoneNumber: String): User`;

export { loginUserQuery, signUpQuery };
