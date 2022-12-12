import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) {}
  };

  return (
    <div className="login bg-[url('https://i.ibb.co/Fxmndkr/PMERhy-Wn-4x.jpg')]">
      <div className="login__container">
        <button className="login__btn login__google px-8 " onClick={googleLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
}
export default Login;
