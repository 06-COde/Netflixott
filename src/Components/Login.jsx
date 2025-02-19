import React, { useRef, useState } from 'react';
import Header from "./Header";
import { Loginvalidation } from "../Utils/loginvalidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase"; 
import { BODY_LOGO } from '../Utils/constant';
//import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Login = () => {
 // const navigate = useNavigate();
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = Loginvalidation(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!signIn) {
      // **Sign Up Logic**
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user  = userCredential.user;
          console.log(userCredential.user);
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            //navigate("/browse");
           
          }).catch((error) => {
            setErrorMsg(error.message)
          });
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMsg = error.msg;
          setErrorMsg(errorCode + "-" + errorMsg );
       });
    } else {
      // **Sign In Logic**
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          console.log(userCredential.user);
          // navigate("/browse"); // ✅ Works after Sign In
        })
        .catch((error)=>{
           const errorCode = error.code;
           const errorMsg = error.msg;
           setErrorMsg(errorCode + "-" + errorMsg );
        });
    }
  };

  return (
    <div>
      <Header />
      <img className='absolute h-screen w-screen object-cover' src= {BODY_LOGO} alt='background'/>
      <div className='w-full h-full opacity-50 absolute left-0 top-0'></div>

      <form onSubmit={(e) => e.preventDefault()} className='absolute flex flex-col px-10 py-10 sm:w-1/2 md:w-1/2 lg:w-3/12 text-white bg-black bg-opacity-75 rounded-md left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]'>
        <h1 className='text-white font-bold mb-3 text-[30px]'>{signIn ? "Sign In" : "Sign Up"}</h1>
        {!signIn && <input ref={name} type='text' placeholder='Full Name' className='p-3 my-2 bg-gray-600 rounded-sm' />}
        <input ref={email} type='email' placeholder='Email Address' className='p-3 my-2 bg-gray-600 rounded-sm' />
        <input ref={password} type='password' placeholder='Password' className='p-3 my-2 bg-gray-600 rounded-sm' />
        <p className='text-red-500'>{errorMsg}</p>
        <button onClick={handleButtonClick} className='p-2 my-2 bg-red-600 rounded-md text-white hover:font-medium'>{signIn ? "Sign In" : "Sign Up"}</button>
        <p>{signIn ? "New to Netflix?" : "Already a User?"} <span className='font-bold cursor-pointer' onClick={toggleSignInForm}>{signIn ? "Sign Up Now." : "Sign In Now."}</span></p>
      </form>
    </div>
  );
};

export default Login;