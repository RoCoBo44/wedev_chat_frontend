const buildUpdateAuthenticationCache = (mutationName) => (cache, mutationResult) => {

  const {user, jwt, authError} = mutationResult.data[mutationName]

  if (!authError){
    localStorage.setItem( 'jwt', jwt)
    localStorage.setItem( 'currentUser', JSON.stringify(user))
    cache.writeData({ data: { jwt: jwt, currentUser: user} })
  }
}

export default buildUpdateAuthenticationCache
