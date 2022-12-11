import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "./components/pages/Course";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import NoPage from "./components/pages/NoPage";
import Reset from "./components/pages/Reset";
// import Register from "./components/pages/Register";
// import Dashboard from "./components/pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Course />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="reset" element={<Reset />} />
          {/* <Route path="register" element={<Register />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
