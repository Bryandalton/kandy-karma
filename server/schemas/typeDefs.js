const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    reviewedCandies: [Candy]
    admin: Boolean
  }

  type Candy {
    candy_name: String!
    survey: [Survey]
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
   login( email: String!, password: String! ): Auth
   addUser( email: String!, password: String! ): Auth
   addSurvey( surveyId: ID
    candy_name: String
    username: String
    type: String
    texture: Int
    look: Int
    smell: Int
    taste: Int
    overall: Int ): User
   addNewCandy(candyName: String!): User 
   deleteCandy( _id: Int! ): User
   updateUser( email: String! ): User
   deleteUser( userId: Int! ): User
  }
`;

//there may be a mismatch between typedef mutation types and resolvers

module.exports = typeDefs;
