import SIGN_UP from  '../apollo/mutations/signUp'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import buildUpdateAuthenticationCache from '../utils/buildUpdateAuthenticationCache'

const useSignUpMutation = () => {
  const options = { update: buildUpdateAuthenticationCache('signup') }
  const [mutate, { loading, error, data }] = useMutation(SIGN_UP, options)
  const signUpUser = async (input) => {
    const { data } = await mutate({ variables: { data: input } })
  
    return data && data.signup
  }

  return {
    loading,
    error,
    data, 
    signUpUser
  }
}

export default useSignUpMutation
