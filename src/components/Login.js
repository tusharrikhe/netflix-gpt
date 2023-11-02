import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toogleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
                alt='netflix'
                 />
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
                <h3 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' :'Sign Up'}</h3>
                {
                    !isSignInForm && <input className='p-4 my-4 w-full bg-slate-800 rounded-lg' type='text' placeholder='Full name'/>
                }
                <input className='p-4 my-4 w-full bg-slate-800 rounded-lg' type='text' placeholder='Email'/>
                <input className='p-4 my-4 w-full bg-slate-800 rounded-lg' type='password' placeholder='Password'/>
                <button className='p-4 my-4 w-full bg-red-800 rounded-lg'>{isSignInForm ? 'Sign In' :'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toogleSignInForm}>{isSignInForm ?'New to Netflix? Sign Up Now':'Already Registered? Sign In Now'}</p>
            </form>
        </div>
    )
}

export default Login
