import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        _id
        email
        username
        reviewedCandies {
          _id
          candy_name
        }
      }
      token
    }
  }
`;

export const ADD_CANDY = gql`
  mutation AddNewCandy($candyName: String!) {
    addNewCandy(candy_name: $candyName) {
      candy_name
      _id
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($email: String!, $password: String!, $username: String!) {
    addUser(email: $email, password: $password, username: $username) {
      user {
        _id
        email
        reviewedCandies {
          _id
          candy_name
        }
        username
      }
      token
    }
  }
`;
export const ADD_SURVEY = gql`
  mutation Mutation(
    $candyName: String
    $username: String
    $type: String
    $texture: Int
    $smell: Int
    $look: Int
    $overall: Int
    $taste: Int
    $surveyId: ID
  ) {
    addSurvey(
      candy_name: $candyName
      username: $username
      type: $type
      texture: $texture
      smell: $smell
      look: $look
      overall: $overall
      taste: $taste
      surveyId: $surveyId
    ) {
      look
      overall
      smell
      surveyId
      taste
      texture
      type
      username
      candy_name
    }
  }
`;
