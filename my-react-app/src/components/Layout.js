import { Outlet, Link } from "react-router-dom";
import { memo } from "react";
// import state
import { useState } from "react";
import { useLocation } from "react-router-dom";

// create state
const Layout = () => {
  const location = useLocation();

  const [state, setState] = useState(location.pathname !== "/");

  function HeaderView() {
    const location = useLocation();
    console.log(location.pathname);
    // return location.pathname !== "/";
    setState(location.pathname !== "/");
  }

  // setstate to heaverView value whenever route changes\

  return (
    <>
      <HeaderView />
      <div className={`relative ${state ? "bg-black/100" : "bg-black/0"}  text-white`}>
        <div className="  px-[80px] flex justify-end py-1 "></div>
        <nav className=" py-6 flex items-center justify-end px-[80px] text-white   w-full font-semibold">
          <div className="w-full">
            <ul className="flex-row flex gap-8  w-full items-center">
              <Link to="/" className="mr-auto text-xl  text-white">
                <img src="https://www.hanyang.ac.kr/" alt="" />
                스카이 명문 학원
              </Link>
              <Link to="/about">학원소개</Link>
              <Link to="/courses">강의 안내</Link>
              <div>|</div>
              <Link to="/login" className="border px-4 py-1">
                로그인
              </Link>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default memo(Layout);
