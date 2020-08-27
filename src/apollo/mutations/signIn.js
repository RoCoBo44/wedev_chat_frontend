import gql from 'graphql-tag' 

export default gql`
  mutation login ($data: SigninInput!){
    signin(data: $data){
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
