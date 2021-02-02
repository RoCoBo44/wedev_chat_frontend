import * as Yup from 'yup' 

const validationSchema = Yup.object({
  username: Yup.string()
  .min(3, 'Must be 3 characters or more')
  .max(20, 'Must be 20 characters or less')
  .required('Required'),
  password: Yup.string()
  .min(8, 'Must be 8 characters or more')
  .max(30, 'Must be 30 characters or less')
  .required('Required'),
})

export default validationSchema
