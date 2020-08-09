import React from 'react' 
import Button from 'react-bootstrap/Button' 

import { Formik, Field, Form, ErrorMessage } from 'formik' 
import validationSchema from './validationSchema'

function SignUpForm({onSubmit, mutationError}){

  return(

    <Formik
      initialValues={{ firstName: '', lastName: '', username: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form id='form'>
        <div>
          <Field name='firstName' type='text' className='form-input' placeholder='FirstName'/>
          <div className='form-error'>
            <ErrorMessage className='alert alert-dark' role='alert' name='firstName'/>
          </div>
        </div>
        <div>
          <Field name='lastName' type='text' className='form-input' placeholder='LastName'/>
          <div className='form-error'>
            <ErrorMessage className='alert alert-dark' role='alert' name='lastName'/>
          </div>
        </div>
        <div>
          <Field name='username' type='text' className='form-input' placeholder='Username'/>
          <div className='form-error'>
            <ErrorMessage className='alert alert-dark' role='alert' name='username'/>
          </div>
        </div>

          {mutationError && 
              <div className='alert alert-dark' role='alert'>
                  :( Username already exists
              </div>
          }
        <div>
          <Field name='password' type='password' className='form-input' placeholder='Password'/>
          <div className='form-error'>
            <ErrorMessage className='alert alert-dark' role='alert' name='password'/>
          </div>
        </div>

        <Button type='submit'>Submit</Button>
      </Form>
    </Formik>
  )
}

export default SignUpForm
