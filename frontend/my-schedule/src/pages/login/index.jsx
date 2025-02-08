import React from 'react'
import { login } from "../../lib/actions"
import { useFormState } from 'react-dom'
import Link from 'next/link'

export default function LoginPage() {
    const [state, action] = useFormState(login, null)
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col items-center shadow-2xl rounded-lg p-5'>
            <Link href="/" className='text-primary text-xl font-bold mb-5'>
                <h1>Myschedule</h1>
            </Link>

            <h2 className='text-2xl font-bold'>Welcome !</h2>
            <p className='text-center text-muted-foreground mb-6 mt-4'>Happy to see you again</p>

            <form className='flex flex-col gap-4 w-[310px]' action={action}>
                <div>
                    <input type="Email" placeholder='Email' name='email' 
                        className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'/>
                    {state?.errors?.email && <p className=' text-red-500 text-sm ml-2'>Invalid Email</p>}
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" 
                        className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'/>
                    {state?.errors?.password && <p className='text-red-500 text-sm ml-2'>{state?.errors.password}</p>}
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='bg-[#323030] text-white w-[160px] rounded-md py-[5px] mt-4 hover:bg-[#4e4a4a] text-center' href='/main'>Login</Link>
                </div>
            </form>

            <div className='mt-4 flex flex-row gap-1'>
                <p className='text-sm'>Don't have an account?</p>
                <Link href='/signup' className='text-sm underline text-blue-600'>Signup</Link>
            </div>
            
        </div>
    </div>
  )
}
