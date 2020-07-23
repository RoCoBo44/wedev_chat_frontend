import SIGN_UP from "../apollo/mutations/signUp"
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import buildUpdateCache from '../utils/buildUpdateCache'

const useSignUpMutation = () => {
  const client = useApolloClient()
  const options = { onCompleted: buildUpdateCache('signup', client) }
  const [mutate, { loading, error, data }] = useMutation(SIGN_UP, options)
  const signUpUser = async (input) => {
    const { data } = await mutate({ variables: { data: input } })
  
    return data 
  }

  return {
    loading,
    error,
    data, 
    signUpUser
  }
}

export default useSignUpMutation
