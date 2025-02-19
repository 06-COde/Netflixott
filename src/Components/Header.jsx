import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../Utils/userSlice";
import { AVTAR_IMG, LOGO_IMG } from "../Utils/constant";


const Header = () => {
   
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const user = useSelector((store)=> store.user);
   console.log(user);
const handleSignOut = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/")
  }).catch((error) => {
    navigate("/error");
  }); 
}

useEffect(()=>{
 const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName, photoURL} = user;
      dispatch(addUser({uid : uid, email: email, displayName : displayName, photoURL : photoURL}));
      navigate("/browse");
   
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  return()=> unsubscribe();
},[]);

  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <div className="h-10 w-48">
          <img src={LOGO_IMG}  alt="HeaderLogo"/>
      </div>
       
       {user && <div className="flex flex-col">
           <img src={AVTAR_IMG} alt="login interface" className="h-20 "/>
           <button onClick={handleSignOut} className="font-bold text-black rounded-lg hover:font-semibold">Sign Out👾</button>
       </div>}
    </div>
  )
}

export default Header;











