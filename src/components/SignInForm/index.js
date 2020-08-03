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
          <Field name= 'username' type= 'text' className= 'form-input' placeholder= 'Username' />
          <ErrorMessage name= 'username ' />
        </div>
        <div>
          <Field name= 'password' type= 'text' className= 'form-input' placeholder= 'Password'  />
          <ErrorMessage name= 'password' />
        </div>

        {mutationError &&   
          <div className= 'alert alert-dark' role= 'alert'>
              Upsi dupsi, user or password is incorrect 
          </div>
        }

        <Button type= 'submit'  className= 'btn btn-primary btn-sm' >Submit</Button>
      </Form>
    </Formik>
  )
}

export default SignInForm
