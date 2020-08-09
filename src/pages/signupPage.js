import React from 'react' 
import Container from 'react-bootstrap/Container' 

import { Link,Route} from 'react-router-dom' 
import { useState } from 'react'
import { useHistory } from  'react-router-dom' 

import useSignUpMutation from  '../hooks/useSignUpMutations'
import SignUpForm from '../components/SignUpForm'

function SignUpPage (props){
  const [mutationError, setMutationError] = useState(false) 
  const {error, loading, signUpUser} = useSignUpMutation() 
  const history = useHistory() 

  const onSubmit = async (values,e) => {
    const response = await signUpUser(values) 

    if (response.authError){
      setMutationError(true) 
      return undefined
    }
    history.push('/home')
  }

  return (
    <Container className='form-wrapper'>
      <div id=  'bg'></div>
      <div id= 'joinedform'>
        <h1>Member Registration</h1>
        <SignUpForm 
          onSubmit = {onSubmit} 
          mutationError={mutationError} 
        />
        <Link className=  'askAccount' to= '/signIn' > Do you have an account? </Link>
      </div>
    </Container>
  ) 
}


export default (SignUpPage) 
