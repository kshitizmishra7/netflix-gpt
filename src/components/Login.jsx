import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = ()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg" alt="logo"/>
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-xl text-white">
        <h2 className='font-semibold text-3xl py-4 '> {isSignIn?"Sign In":"Sign Up"}</h2>
     { !isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full border border-box rounded-md bg-opacity-80 bg-gray-800" />}
        <input type="email" placeholder="Email Address" className="p-4 my-4 w-full border border-box rounded-md bg-opacity-80 bg-gray-800" />
       
        <input  type="password" placeholder="Password" className="p-4 my-4 w-full border border-box rounded-md bg-gray-800 bg-opacity-80"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg ">Sign In</button>
        <p className="cursor-pointer" onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now."}</p>

      </form>
    </div>
  )
}

export default Login
