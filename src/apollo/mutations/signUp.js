import gql from 'graphql-tag';

export default gql`
    mutation register ($data: SignupInput!) {
        signup(data: $data){
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
