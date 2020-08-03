import CURRENT_USER from '../apollo/queries/currentUser'
import { useQuery } from '@apollo/react-hooks'

const useCurrentUserQuery = () => {
  const{ loading, error, data }= useQuery(CURRENT_USER)

  return {
    loading,
    error,
    currentUser: data && data.currentUser
  }
}

export default useCurrentUserQuery
