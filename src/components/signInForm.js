import React from 'react';
import Button from 'react-bootstrap/Button';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SignInForm (props){
    const onSubmit = props.onSubmit
    const mutationError = props.mutationError

    return(

        <Formik
            initialValues={{ username: '', password: ''}}
            validationSchema={Yup.object({
                username: Yup.string()
                .min(3, 'Must be 3 characters or more')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
                password: Yup.string()
                .min(8, 'Must be 8 characters or more')
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
            })}
            onSubmit={onSubmit}
            >
            <Form>
                <Field name="username" type="text" className="form-input" placeholder="Username" />
                <ErrorMessage className="alert alert-dark" role="alert" name="username" />
                <div></div>
                <Field name="password" type="text" className="form-input" placeholder="Password"  />
                <ErrorMessage className="alert alert-dark" role="alert" name="password" />
                <div></div>

                {mutationError &&   <div className="alert alert-dark" role="alert">
                                    Upsi dupsi, user or password is incorrect 
                                    </div>
                }

                <Button type="submit">Submit</Button>
            </Form>
        </Formik>
    )
}

export default SignInForm
