import React from 'react'
import { FormContextProvider } from '../context/forms/FormProvider.jsx'
import RegisterForm from '../components/forms/RegisterForm.jsx'

const SignupPage = () => {
  return (
    <>
      <h2>Sign Up</h2>
      <FormContextProvider>
        <RegisterForm />
      </FormContextProvider>
    </>
  )
}

export default SignupPage
