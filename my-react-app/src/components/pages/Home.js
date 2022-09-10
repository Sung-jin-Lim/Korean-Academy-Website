import Typewriter from "typewriter-effect";
import Footer from "../Footer";

import React from "react";
import Carousel from "../myComponent";

const Home = () => {
  return (
    <div className="home absolute top-0 z-[-20] w-[100%]">
      <div className="firstpage   z-0 flex justify-center items-center flex-col overflow-hidden">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(90)
              .typeString(
                "재외국민 특례 전문 분당<br/><span class='blue'>스카이</span> 명문 학원입니다"
              )
              .callFunction(() => {
                console.log("String typed out!");
              })

              .start();
          }}
        />
        <div className="flex gap-6 relative top-10 font-bold text-white ">
          <button className=" transition ease-in-out  bg-white/0 w-40 hover:bg-white hover:text-black border border-slate-300 rounded-md py-2   shadow-sm relative   text-center ">
            학원소개
          </button>
          <button className="transition ease-in-out bg-white/0 w-40 hover:bg-white hover:text-black border border-slate-300 rounded-md py-2   shadow-sm relative   text-center">
            강의안내
          </button>
          <button className=" transition ease-in-out bg-white/0 w-40 hover:bg-white hover:text-black border border-slate-300 rounded-md py-2   shadow-sm relative   text-center">
            전세계 모의고사
          </button>
          <button className=" transition ease-in-out bg-white/0 hover:bg-white hover:text-black w-40 border border-slate-300 rounded-md py-2   shadow-sm relative   text-center">
            상담신청
          </button>
        </div>

        {/* <input
          type="text"
          className="w-[50rem]   text-right py-3 mt-20 placeholder:text-center placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          placeholder="검색어를 입력해주세요"
        /> */}
        {/* <button className="bg-white px-4 py-3 text-black">dasd</button> */}
      </div>
      <div>
        <div className="second-page flex justify-center items-center gap-5 flex-col bg-white w-[100%] px-[100px] text-black py-[200px] ">
          <hr className="relative top-[-5rem] w-[50rem]" />

          <div className="flex  items-center gap-10 ">
            <h1 className="text-4xl font-bold flex flex-nowrap nowrap">현장 스케치</h1>
            <span className="blue text-3xl">||</span>
            초월 인테리어는 고객의 마음을 사로잡는 독보적인 인테리어를 선보이고 있습니다
          </div>
          <br />
          <Carousel />
          <hr className="relative top-[5rem] w-[50rem]" />
        </div>
      </div>

      <div className="fourth flex-row flex w-[100%] text-white font-bold ">
        <div className="bg-[#1e90ff] px-[80px] py-[150px] w-[50%] flex gap-10 flex-col bg-[url('https://i.postimg.cc/9Q51Tygr/bluebg.jpg')]">
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] text-white/50">COUNSELING</h3>{" "}
            <img src="/desk.png" alt="" className="h-12" />
          </div>
          <h1 className="text-[40px]">성공적인 창업을 원하신다면 ?</h1>
          <button className="transition ease-in-out hover:bg-black hover:text-white bg-white px-4 py-5 text-[#1e90ff] w-[50%] rounded text-xl">
            창업상담 바로가기
          </button>
        </div>
        <div className="bg-black px-[80px] py-[150px] w-[50%] flex gap-10 flex-col bg-[url('https://i.ibb.co/Fxmndkr/PMERhy-Wn-4x.jpg')]">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl text-white/50">PRICING</h3>
            <img src="/money.png" alt="" className="h-12" />
          </div>

          <h1 className="text-[40px]">성공적인 창업을 원하신다면 ?</h1>
          <button className="transition ease-in-out hover:bg-black hover:text-white bg-white px-4 py-5 text-black w-[50%] rounded text-xl   ">
            전화문의
          </button>
        </div>
      </div>

      <div className="third br-2 px-[100px] py-[200px] bg-white text-black flex  justify-center items-center flex-col ">
        <hr className="relative top-[-5rem] w-[50rem]" />
        <div className="flex gap-[5rem] w-[100%] justify-center w-[100%]">
          <img
            className="w-[50%] max-w-[700px] h-[auto]"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA0MTdfMjMx/MDAxNTIzOTUxMDYzOTcw.ACSyxjClNuUscoO7CdlcL8sVXbKDMHhgOT7k9mv173Ig.khqK1jkSd-9mT1gDWziM4WfnI5Epos1AK_S1S-S7-x8g.JPEG.hangagan/20180412_163843.jpg?type=w800"
            alt=""
          />
          <div className="flex flex-col justify-center align max-w-[500px] w-[50%]">
            <h1 className="text-4xl font-bold">문의 안내</h1>

            <div className="mt-[3rem]">
              계좌안내 입니다: 우리은행 101 07 184621 / 김상백 /
              <br />
              학원 전화번호: 031 - 705 -7562 , 대표강사: 010 7741 4847
              <br />
              대표강사 카톡 아이디 : kisa4847,
              <br />
              대표강사 이메일 :kisa4847@nate.com
            </div>

            <div className="flex gap-[2rem] mt-[3rem] font-bold">
              <button className="bg-black px-4 py-3 text-[white] w-[100%] max-w-[20rem]">
                상담신청
              </button>
            </div>
          </div>
        </div>
        <hr className="relative top-[5rem] w-[50rem]" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
