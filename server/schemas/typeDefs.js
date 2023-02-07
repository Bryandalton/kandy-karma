const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    reviewedCandies: [Candy]
  }

  type Candy {
    candy_name: String!
    _id: ID
  }

  type Survey {
    surveyId: ID
    candy_name: String
    username: String
    type: String
    texture: Int
    look: Int
    smell: Int
    taste: Int
    overall: Int
  }

  type Auth {
    token: ID
    user: User
  }

  input SurveyInput {
    candy_name: String
    username: String
    type: String
    texture: Int
    look: Int
    smell: Int
    taste: Int
    overall: Int
  }

  type Query {
    users: [User]
    me: User
    candies: [Candy]
    candy(candyName: String!): Candy
    surveys: [Survey]
    survey(surveyId: Int!): Survey
  }

  type Mutation {
    login(username: String!, password: String!): Auth

    addUser(email: String!, password: String!, username: String!): Auth

    addSurvey(
      surveyId: ID
      candy_name: String
      username: String
      type: String
      texture: Int
      look: Int
      smell: Int
      taste: Int
      overall: Int
    ): Survey

    addNewCandy(candy_name: String!): Candy

    deleteCandy(_id: Int!): Candy

    updateUser(email: String!): User

    deleteUser(userId: Int!): User
  }
`;

module.exports = typeDefs;
