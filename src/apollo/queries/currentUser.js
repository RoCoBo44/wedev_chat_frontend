import gql from 'graphql-tag'

const CURRENT_USER = gql`
query currentU {
    currentUser{
      id
      username
      firstName
      lastName
    }
  }
`;

export default CURRENT_USER
