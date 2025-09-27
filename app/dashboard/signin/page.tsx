import React, { FC } from 'react'
import FormSignIn from './form';


interface SignInPageProps {

}

export const metadata = {
    title: 'Sign In - Dashboard',
}

const SignInPage: FC<SignInPageProps> = ({}) => {

  return (
    <FormSignIn />
  )
}

export default SignInPage;