import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useForm} from "react-hook-form"
import { Link,Route} from 'react-router-dom';


function SignUpPage (props){
    const {register, handleSubmit, errors }  = useForm();

    const onSubmit = data => console.log(data);

    return (
    <Container className='form-wrapper'>
        <h1>Member Registration</h1>
        <Form onSubmit={handleSubmit(onSubmit)} >
            <Row>
                <Col>
                    <Form.Group controlId="firstName" >
                        <Form.Control
                            type="text"
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

            <Button type="submit">Sign Up</Button>

            <div className= "askAccount">
            <Route >
                <Link to="/signIn" small > Do you have an account? </Link>
            </Route>
            </div>
        
            
        </Form>

    </Container>
    );
}

export default SignUpPage;