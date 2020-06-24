import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useForm} from "react-hook-form"
import { Link,Route} from 'react-router-dom';
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { graphql } from 'react-apollo'
import { useState } from 'react'

const SIGN_IN = gql`
    mutation login ($data: SigninInput!){
        signin(data: $data){
        user{
            username
            firstName
            lastName
        }
        jwt
        authError
        }
    }
`;

function SignInPage (props){
    const client = useApolloClient();
    const {register, handleSubmit, errors }  = useForm();
    const [mutationError, setMutationError] = useState(false);
    const [signIn_mutation] = useMutation(SIGN_IN, {
        onCompleted( {signin} ) {
            const {user, jwt, authError} = signin

            localStorage.setItem("jwt", jwt);
            localStorage.setItem("currentUser", JSON.stringify(user));
            if (!authError){
                client.writeData({ data: { jwt: jwt, currectUser: user} });
            }
        }
      });


    const onSubmit = async (values) => {
        const response = await signIn_mutation({ variables: { data: {"username": values.username, "password" : values.password} } });
        if (response.data.signin.authError == null){
            let url = "http://localhost:3000/home"
            window.location.href = url;
        }else{
            console.log("Login error");
            setMutationError(true);
        }
    }

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

            <div className= "askAccount">
                <Route >
                    <Link to="/signUp" > Create an Account </Link>
                </Route>
            </div>
        
            
        </Form>

    </Container>
    );
}

export default graphql(SIGN_IN)(SignInPage);