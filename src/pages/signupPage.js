import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useForm} from "react-hook-form"
import { Link,Route} from 'react-router-dom';

import { useState } from 'react'

import useSignUpMutation from "../hooks/useSignUpMutations"


function SignUpPage (props){
    const {register, handleSubmit, errors }  = useForm();
    const [mutationError, setMutationError] = useState(false);
    const {error, loading, signUpUser} = useSignUpMutation();

    const onSubmit = async (values,e) => {
        if (values.firstname === '' || values.lastname === '' || values.username === '' || values.password === '' ) return ;
        const response = await signUpUser(values);

        if (response.signup.authError == null){
            let url = "http://localhost:3000/home"
            window.location.href = url;
        }else if(response.signup.authError === "user exist"){
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
                            name= {"firstName"}
                            ref = {register({ required: true })}
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="lastName">
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name= "lastName"
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
                <Link to="/signIn" > Do you have an account? </Link>
            </div>
        
        </Form>

    </Container>
    );
}


export default (SignUpPage);
