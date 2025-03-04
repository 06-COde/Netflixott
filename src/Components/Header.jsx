import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { AVTAR_IMG, LOGO_IMG, SUPPORTED_LANGUAGES } from "../Utils/constant";
import { toggleGptSearchView } from "../Utils/gptslice";
import { changeLangauge } from "../Utils/configslice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  

 const handleGptsearch = ()=>{
 dispatch(toggleGptSearchView());
 }

 const handleLanguageChnage = (e)=>{
   dispatch(changeLangauge(e.target.value));
 }


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]); 

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex cd:flex-col justify-between bg-opacity-85">
      <div className="h-10 w-48 mx-auto md:mx-0">
        <img src={LOGO_IMG} alt="HeaderLogo" />
      </div>

      {user && (
        
        <div className="flex">
          {showGptSearch && <select className="bg-black text-white m-3 border border-red-600 rounded-sm" onChange={handleLanguageChnage}>
              {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <div className=" flex " >
              <button className="py-2 px-4 mx-4 my2 bg-purple-800 text-white rounded-lg cursor-pointer hover:bg-purple-500" onClick={handleGptsearch}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
          </div>
          <img src={AVTAR_IMG} alt="login interface" className="px-2"/>
          <button
            onClick={handleSignOut}
            className="font-bold text-white rounded-lg hover:font-semibold"
          >
            Sign Out👾
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
