import gql from 'graphql-tag' 

export default gql`
  mutation register ($data: SignupInput!) {
    signup(data: $data){
      user{
<<<<<<< Updated upstream
=======
        id
>>>>>>> Stashed changes
        username
        firstName
        lastName
      }
      jwt
      authError
      }
  }
` 
