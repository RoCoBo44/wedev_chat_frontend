const buildUpdateCache = (mutationName, client) => (mutationResult) => {
    const {user, jwt, authError} = mutationResult[mutationName]
    localStorage.setItem("jwt", jwt)
    localStorage.setItem("currentUser", JSON.stringify(user))
    if (!authError){
        client.writeData({ data: { jwt: jwt, currectUser: user} })
    }
}

export default buildUpdateCache
