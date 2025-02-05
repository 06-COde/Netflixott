import Header from "./Header";
import { BODY_LOGO } from "../Utils/constant";
import { useState, useRef } from "react";
import { Loginvalidation } from "../Utils/loginvalidation";


const Login = () => {

    const [signIn, setsigIn] = useState(true);
    const[errorMsg,seterrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const togglebar = ()=>{
        setsigIn(!signIn);
    }
    const handleButtonClick = ()=>{
       console.log(email.current.value);
       console.log(password.current.value);
       const message = Loginvalidation(email.current.value, password.current.value)
       seterrorMsg(message);
    }

  return (
    <div>
        <Header/>
         <div className="absolute h-auto w-auto">
            <img src=  {BODY_LOGO} alt="logo" className=""/>
         </div>
         <form onSubmit={(e)=> e.preventDefault()} className=" absolute bg-black rounded-sm w-4/12 my-28 mx-auto left-0 right-0  p-14 bg-opacity-70 text-white">
         <p className="flex items-start font-bold  px-10 text-2xl pb-8">{signIn ? "Sign In" : "Sign Up"}</p>
         <div className="flex justify-center items-center flex-col">
               {!signIn && (<input type="Text" placeholder="Full Name" className="py-2 px-4 m-3 border border-black rounded-sm bg-slate-700"/>)}
               <input ref={email} type="username" placeholder="Email or Phone No" className="py-2 px-4 m-3 border border-black rounded-sm bg-slate-700" />
              <input ref={password} type="password" placeholder="Password"   className="py-2 px-4 m-3 border border-black rounded-sm bg-slate-700"/>
                <p className="text-red-600 text-lg ">{errorMsg}</p>

               <button className="px-20  py-2 m-2 border border-black rounded-sm bg-red-600 text-white hover:bg-red-800" onClick={handleButtonClick}>{signIn ? "SIGN IN" : "SIGN UP"}</button>
               <p className="font-semibold  py-2" onClick={togglebar}>{signIn ? "Are you New?" : "Already Registered? "}<span className="cursor-pointer" onClick={togglebar}>{signIn?"Sign Up Now":"Sign In Now"}</span></p>
          </div>
         </form>
    </div>
  )
}

export default Login;
