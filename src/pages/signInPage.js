import React from 'react' 
import Container from 'react-bootstrap/Container' 

import { Link,Route} from 'react-router-dom' 
import { useState } from 'react'
import { useHistory } from  'react-router-dom' 

import useSignInMutation from  '../hooks/useSignInMutations'
import SignInForm from '../components/SignInForm'

function SignInPage (props){
  const [mutationError, setMutationError] = useState(false) 
  const { error, loading, signInUser } = useSignInMutation() 
  const history = useHistory() 

  const onSubmit = async (values) => {
    const { authError } = await signInUser(values) 
    if (authError){
      setMutationError(true)
      return undefined
    }

    history.push('/home')
  }

  return (
    <Container className='form-wrapper' >
      <div id= 'bg'></div>
      <div id='joinedform'>
        <h1>Member Login</h1>
        <SignInForm 
          onSubmit={onSubmit} 
          mutationError={mutationError} 
        />
        <Link className= 'askAccount' to= '/signUp'>Create an Account</Link>
      </div>
    </Container>
  ) 
}

export default (SignInPage) 
