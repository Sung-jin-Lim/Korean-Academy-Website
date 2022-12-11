import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
function Login() {
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) {}
  };
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          placeholder="E-mail Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login__textBox"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__btn" onClick={signInWithEmailAndPassword(auth, email, password)}>
          Login
        </button>
        <button className="login__btn login__google" onClick={googleLogin}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;
