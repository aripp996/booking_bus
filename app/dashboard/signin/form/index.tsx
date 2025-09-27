"use client"

import React, { FC } from 'react'
import { handleSignIn } from './action';
import { Input } from '@/components/ui/input';

interface FormSignInProps {

}

interface FormState {
    errorTitle: string | null;
    errorDesc: string[];
}

const initialFormState: FormState = {
    errorTitle: null,
    errorDesc: []
}

const FormSignIn: FC<FormSignInProps> = ({}) => {

    const [formState, setFormState] = React.useState<FormState>(initialFormState);

    console.log(formState);

    const formAction = async (formData: FormData) => {
        await handleSignIn(formData);
    };

  return (
    <div className='w-full h-screen'>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='mt-10 text-center text-2xl font-bold leading-9 trancking-tight text-gray-900'>
                    Sign in to your account
                </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form action={formAction} className='space-y-6'>
                    <Input type='email' placeholder='Email address' name='email' required/>
                    <Input type='password' placeholder='Password' name='password' required/>

                    <button type='submit' className='w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition'>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormSignIn;