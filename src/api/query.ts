const loginUserQuery = `
    query($email: String!, $password: String!) {
      loginUser(email: $email, password: $password){
        id
        name
        email
      }
    }`;

export { loginUserQuery };
