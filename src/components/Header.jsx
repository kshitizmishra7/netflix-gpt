import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const { uid,email, displayName } = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName}));
    navigate("/browse");
   
  } else {
    dispatch(removeUser());
    navigate("/");
  }
});
return ()=>  unsubscribe();
},[]);

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
        <img className='w-44'
         src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="background"/>
     { user && <div className='flex p-2'>
        <img className='w-12 h-12' alt='usericon' src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"/>
      <button onClick={handleSignOut} className="font-bold text-white ">
            Sign Out
          </button>
      </div>}
    </div>
  )
}

export default Header
