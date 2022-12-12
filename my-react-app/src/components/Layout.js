import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { memo } from "react";
// import state
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

// create state
const Layout = () => {
  const location = useLocation();

  const [state, setState] = useState(location.pathname !== "/");



  function HeaderView() {
    const location = useLocation();
    console.log(location.pathname);
    // return location.pathname !== "/";
    useEffect(() => {
      setState(location.pathname !== "/");
    }, []);
  }

  // setstate to heaverView value whenever route changes\

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) { }
  };

  const [user, loading] = useAuthState(auth);
  return (
    <>
      <HeaderView />
      <div className={`relative ${state ? "bg-black/100" : "bg-black/0"}  text-white`}>
        <div className="  px-[80px] flex justify-end py-1 "></div>
        <nav className=" py-6 flex items-center justify-end px-[80px] text-white   w-full font-semibold">
          <div className="w-full">
            <ul className="flex-row flex gap-8  w-full items-center ">
              <Link to="/" className="mr-auto text-xl  text-white">
                스카이 명문 학원
              </Link>
              <Link to="/about">학원소개</Link>
              <Link to="/courses">강의 안내</Link>
              <div>|</div>
              {!user &&
                <button className="border px-4 py-1 hover:bg-white hover:text-black transition ease-in-out" onClick={googleLogin}>
                  로그인
                </button>
              }


              {user && <img src={user.photoURL} alt="logo" className="w-10 h-10 rounded-full border-solid border-2 border-white " referrerPolicy="no-referrer" />}
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default memo(Layout);
