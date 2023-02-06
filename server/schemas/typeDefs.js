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
    _id: candyId
    candy_name: String
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
    me: User
    candies: [Candy]
  }
  type Mutation {
   login(): Auth
   addUser(): Auth
   addSurvey(): User
   addNewCandy(): User 
   deleteCandy(): User
   updateUser(): User
   deleteUser(): User
  }
`;

//there may be a mismatch between typedef mutation types and resolvers

module.exports = typeDefs;
