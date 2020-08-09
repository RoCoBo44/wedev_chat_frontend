import React from 'react' 
import Button from 'react-bootstrap/Button' 

import { Formik, Field, Form, ErrorMessage } from 'formik' 
import validationSchema from './validationSchema'

function SignInForm ({onSubmit, mutationError}){

  return(

    <Formik
      initialValues={{ username: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form id= 'form'>
        <div>
          <Field name='username' type='text' className='form-input' placeholder='Username' />
          <div className='form-error'>
            <ErrorMessage  className='form-error' name= 'username' />
          </div>
        </div>
        <div>
          <Field name='password' type='password' className='form-input' placeholder='Password' />
          <div className='form-error'>
            <ErrorMessage name='password' />
          </div>
        </div>

        {mutationError &&   
          <div className='alert alert-dark' role='alert'>
              Upsi dupsi, user or password is incorrect 
          </div>
        }

        <Button type='submit' >Submit</Button>
      </Form>
    </Formik>
  )
}

export default SignInForm
