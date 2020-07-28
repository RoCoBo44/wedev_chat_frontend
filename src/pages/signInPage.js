import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import {useForm} from "react-hook-form" //En WeDev Usan Formik
import { Link,Route} from 'react-router-dom';
import { useState } from 'react'

import useSignInMutation from "../hooks/useSignInMutations"

function SignInPage (props){
    const {register, handleSubmit, errors }  = useForm();
    const [mutationError, setMutationError] = useState(false);
    const {error, loading, signInUser} = useSignInMutation();

    const onSubmit = async (values) => {
        const response = await signInUser(values);
        if (response.signin.authError == null){
            let url = "http://localhost:3000/home" //esto es super chancho, tengo que usar el history porque no siempre va al local host
            window.location.href = url;
        }else{
            console.log("Login error");
            setMutationError(true);
        }
    }

    //Tengo que sacar esto a componentes 
    return (
        <Container className='form-wrapper'>
            <h1>Member Login</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >

                <Form.Group controlId="username">
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name= "username"
                        ref = {register}
                        isInvalid ={mutationError}
                    />
                </Form.Group>

                <Form.Group controlId="password" ref = {register}>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name= "password"
                        ref = {register}
                        isInvalid ={mutationError}
                    />
                </Form.Group>

                {mutationError &&   <div className="alert alert-dark" role="alert">
                                        Upsi dupsi, user or password is incorrect 
                                    </div>
                }

                <Button type="submit">Sign In</Button>
           
            </Form>

            <div className= "askAccount">  
                <Link to="/signUp" > Create an Account </Link>
            </div>

        </Container>
    );
}

export default (SignInPage);
