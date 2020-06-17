import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useForm} from "react-hook-form"
import { Link,Route} from 'react-router-dom';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { graphql } from 'react-apollo'
import { useState } from 'react'

const SIGN_UP = gql`
    mutation SignUp ($data: SignupInput!) {
        signup(data: $data) {
        user{
             firstName
             lastName
             username
        }
        authError
        jwt
        }
    }
`;

function SignUpPage (props){
    const {register, handleSubmit, errors }  = useForm();
    const [signUp_mutation, { data }] = useMutation(SIGN_UP);
    const [mutationError, setMutationError] = useState(false);

    const onSubmit = async (values) => {
        const response = await signUp_mutation({ variables: { data: {"firstName" : values.firstname, "lastName": values.lastname, "username": values.username, "password" : values.password} } });
        if (response.data.signup.authError == null){
            let url = "http://localhost:3000/home"
            window.location.href = url;
        }else if(response.data.signup.authError === "user already exists"){
            console.log("USER ALREADY EXISTS");
            setMutationError(true);
        }
      }
    return (
    <Container className='form-wrapper'>
        <h1>Member Registration</h1>
        <Form onSubmit={handleSubmit(onSubmit)} >
            <Row>
                <Col>
                    <Form.Group controlId="firstName" >
                        <Form.Control
                            type="string"
                            placeholder="First Name"
                            name= {"firstname"}
                            ref = {register({ required: true })}
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="lastName">
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name= "lastname"
                            ref = {register}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="username">
                <Form.Control
                    type="text"
                    placeholder="Username"
                    name= "username"
                    ref = {register}
                    isInvalid ={mutationError}
                />
            </Form.Group>

            {mutationError &&   <div className="alert alert-dark" role="alert">
                                    Error :( Username already exists
                                </div>
            }

            <Form.Group controlId="password" ref = {register}>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name= "password"
                    ref = {register}
                />
            </Form.Group>

            <Button type="submit">Sign Up</Button>

            <div className= "askAccount">
            <Route >
                <Link to="/signIn" > Do you have an account? </Link>
            </Route>
            </div>
        
            
        </Form>

    </Container>
    );
}


export default graphql(SIGN_UP)(SignUpPage);