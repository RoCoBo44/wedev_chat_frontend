import SIGN_IN from "../apollo/mutations/signIn"
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import buildUpdateAuthenticationCache from '../utils/buildUpdateAuthenticationCache'

const useSignInMutation = () => {
  const options = { update: buildUpdateAuthenticationCache('signin') }
  const [mutate, { loading, error, data }] = useMutation(SIGN_IN, options)
  const signInUser = async (input) => {
    const { data } = await mutate({ variables: { data: input } })

    return data 
  }

  return {
    loading,
    error,
    data,
    signInUser 
  }
}

export default useSignInMutation
