const { gql } = require("apollo-server");

const usersTypeDefs = gql`
  input UserInput {
    email: String!
    username: String!
    password: String!
    password2: String!
  }

  type User {
    response: String!
    email: String!
    username: String!
  }

  type Tokens {
    refresh: String!
    access: String!
  }

  type Access {
    access: String!
  }

  input CredentialsInput {
    email: String!
    password: String!
  }

  type Mutation {
    authenticate(credentials: CredentialsInput!): Tokens!
    refreshToken(refresh: String!): Access!
    registerUser(user: UserInput!): User!
  }
`;

module.exports = usersTypeDefs;
