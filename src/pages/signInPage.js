import React from 'react';
import Container from 'react-bootstrap/Container';

import { Link,Route} from 'react-router-dom';
import { useState } from 'react'
import { useHistory } from "react-router-dom";

import useSignInMutation from "../hooks/useSignInMutations"
import SignInForm from '../components/signInForm'

function SignInPage (props){
    const [mutationError, setMutationError] = useState(false);
    const {error, loading, signInUser} = useSignInMutation();
    let history = useHistory();

    const onSubmit = async (values) => {
        const response = await signInUser(values);
        if (!response.signin.authError){
            history.push('/home')
        }else{
            console.log("Login error");
            setMutationError(true);
        }
    }

    return (
        <Container className='form-wrapper' >
            <h1>Member Login</h1>
            <SignInForm onSubmit = {onSubmit} mutationError={mutationError}> </SignInForm>
            <div className= "askAccount">  
                <Link to="/signUp" > Create an Account </Link>
            </div>

        </Container>
    );
}

export default (SignInPage);
