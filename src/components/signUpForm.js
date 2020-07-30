import React from 'react';
import Button from 'react-bootstrap/Button';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SignUpForm(props){
    const onSubmit = props.onSubmit
    const mutationError = props.mutationError

    return(

        <Formik
            initialValues={{ firstName: '', lastName: '', username: '', password: ''}}
            validationSchema={Yup.object({
                firstName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
                lastName: Yup.string()
                .max(50, 'Must be 20 characters or less')
                .required('Required'),
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
                <Field name="firstName" type="text" className="form-input" placeholder="FirstName" />
                <ErrorMessage className="alert alert-dark" role="alert" name="firstName" />
                <div></div>

                <Field name="lastName" type="text" className="form-input" placeholder="LastName" />
                <ErrorMessage className="alert alert-dark" role="alert" name="lastName" />
                <div></div>

                <Field name="username" type="text" className="form-input" placeholder="Username" />
                <ErrorMessage className="alert alert-dark" role="alert" name="username" />
                <div></div>

                {mutationError &&   <div className="alert alert-dark" role="alert">
                                        ss:( Username already exists
                                    </div>
                }

                <Field name="password" type="text" className="form-input" placeholder="Password"  />
                <ErrorMessage className="alert alert-dark" role="alert" name="password" />
                <div></div>


                <Button type="submit">Submit</Button>
            </Form>
        </Formik>
    )
}

export default SignUpForm
