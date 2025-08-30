import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name =useRef(null);
  const email =useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick=()=>{
    //Validate form 
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //  Sign Up Logic
    if(!isSignIn){
   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
     updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
  });

    } else{
            // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
  
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    
  }

  const toggleSignIn = ()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg" alt="logo"/>
      </div>
<form
  onSubmit={(e) => {
    e.preventDefault(); // Prevent default form submission
    handleButtonClick(); // Call the handler
  }}
  className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-xl text-white"
>
  <h2 className="font-semibold text-3xl py-4">
    {isSignIn ? "Sign In" : "Sign Up"}
  </h2>
  {!isSignIn && (
    <input
    ref={name}
      type="text"
      placeholder="Full Name"
      className="p-4 my-4 w-full border border-box rounded-md bg-opacity-80 bg-gray-800"
    />
  )}
  <input
    ref={email}
    type="email"
    placeholder="Email Address"
    className="p-4 my-4 w-full border border-box rounded-md bg-opacity-80 bg-gray-800"
  />
  <input
    ref={password}
    type="password"
    placeholder="Password"
    className="p-4 my-4 w-full border border-box rounded-md bg-gray-800 bg-opacity-80"
  />
  <p className="text-red-600 font-semibold font-lg py-2">{errorMessage}</p>
  <button
    type="submit" // Change to "submit" to trigger the form's onSubmit
    className="p-4 my-6 bg-red-700 w-full rounded-lg"
  >
    {isSignIn ? "Sign In" : "Sign Up"}
  </button>
  <p className="cursor-pointer" onClick={toggleSignIn}>
    {isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}
  </p>
</form>
    </div>
  )
}

export default Login;
