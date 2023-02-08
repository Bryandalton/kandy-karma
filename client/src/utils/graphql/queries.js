import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Query {
    me {
      email
      reviewedCandies {
        candy_name
      }
      username
    }
  }
`

export const QUERY_CANDY =  gql`
query Query($candyName: String!) {
    candy(candyName: $candyName) {
      candy_name
      _id
    }
  }
`

export const QUERY_SURVEY = gql`
query Query($surveyId: Int!) {
    survey(surveyId: $surveyId) {
      candy_name
      look
      overall
      smell
      surveyId
      taste
      texture
      type
      username
    }
  }  
`