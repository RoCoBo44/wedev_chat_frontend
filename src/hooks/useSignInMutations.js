import SIGN_IN from "../apollo/mutations/signIn"
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import buildUpdateCache from '../utils/buildUpdateCache'

const useSignInMutation = () => {
  const client = useApolloClient()
  const options = { onCompleted: buildUpdateCache('signin', client) }
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
