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
      <Form id= 'form'>
        <div>
          <Field name= 'firstName' type= 'text' className= 'form-input' placeholder= 'FirstName' />
          <ErrorMessage className= 'alert alert-dark' role= 'alert' name= 'firstName' />
        </div>
        <div>
          <Field name= 'lastName' type= 'text ' className= 'form-input' placeholder= 'LastName' />
          <ErrorMessage className= 'alert alert-dark' role= 'alert' name= 'lastName' />
        </div>
        <div>
          <Field name= 'username' type= 'text' className= 'form-input' placeholder= 'Username' />
          <ErrorMessage className= 'alert alert-dark' role= 'alert' name= 'username' />
        </div>

          {mutationError && 
              <div className= 'alert alert-dark' role= 'alert'>
                  :( Username already exists
              </div>
          }
        <div>
          <Field name= 'password' type= 'text' className= 'form-input' placeholder= 'Password'  />
          <ErrorMessage className= 'alert alert-dark' role= 'alert' name= 'password' />
        </div>

        <Button type= 'submit'>Submit</Button>
      </Form>
    </Formik>
  )
}

export default SignUpForm
