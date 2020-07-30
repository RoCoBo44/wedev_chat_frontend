import React from 'react';
import Container from 'react-bootstrap/Container';

import { Link,Route} from 'react-router-dom';
import { useState } from 'react'
import { useHistory } from "react-router-dom";

import useSignUpMutation from "../hooks/useSignUpMutations"
import SignUpForm from '../components/signUpForm'

function SignUpPage (props){
    const [mutationError, setMutationError] = useState(false);
    const {error, loading, signUpUser} = useSignUpMutation();
    let history = useHistory();

    const onSubmit = async (values,e) => {
        const response = await signUpUser(values);

        if (response.signup.authError == null){
            history.push('/home')
        }else if(response.signup.authError === "user exist"){
            setMutationError(true);
        }
    }
    return (
        <Container className='form-wrapper'>
            <h1>Member Registration</h1>
            <SignUpForm onSubmit = {onSubmit} mutationError={mutationError}></SignUpForm>
            <div className= "askAccount">
                <Link to="/signIn" > Do you have an account? </Link>
            </div>
            
        </Container>
    );
}


export default (SignUpPage);
