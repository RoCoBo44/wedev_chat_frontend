import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useForm} from "react-hook-form"
import { Link,Route} from 'react-router-dom';

function SignInPage (props){
    const {register, handleSubmit, errors }  = useForm();

    const onSubmit = data => console.log(data);

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
                />
            </Form.Group>

            <Form.Group controlId="password" ref = {register}>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name= "password"
                    ref = {register}
                />
            </Form.Group>

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

export default SignInPage;