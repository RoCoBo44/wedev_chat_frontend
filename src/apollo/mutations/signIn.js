import gql from 'graphql-tag';

export default gql`
    mutation login ($data: SigninInput!){
        signin(data: $data){
        user{
            username
            firstName
            lastName
        }
        jwt
        authError
        }
    }
`;
