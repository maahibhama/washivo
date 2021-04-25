const loginUserQuery = `
    query($email: String!, $password: String!) {
      loginUser(email: $email, password: $password){
        id
        name
        email
      }
    }`;

const bookingQuery = `
query(){
  addBooking(
    name: String!
    orignalprice: String!
    discountInPercentage: String
    description: String!
    category: String!
    company: String!
    type: String!
    rating: String
    ratingType: String
    availableSize: [String]!
    availableColor: [String]!
    ){
      name
      originalprice
      discountInPercentage
      description
      category
      company
      type
      rating
      ratingType
      availableSize
      availableColor
    }
}
`;

export { loginUserQuery, bookingQuery };
