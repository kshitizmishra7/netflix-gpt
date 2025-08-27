import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg" alt="logo"/>
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h2 className='font-bold text-3xl py-4'> Sign In</h2>
        <input type="email" placeholder="Email Address" className="p-2 m-2"/>
        <input type="password" placeholder="Password" className="p-2 m-2"/>
        <button className="p-4 m-4 bg-red-700 ">Sign In</button>
      </form>
    </div>
  )
}

export default Login
