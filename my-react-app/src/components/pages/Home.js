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
        <div className="second-page flex justify-center items-center gap-10 flex-col bg-white w-[100%] px-[100px] text-black py-[200px] ">
          <hr className="relative top-[-5rem] w-[50rem]" />

          <div className="flex  items-center gap-10">
            <h1 className="text-4xl font-bold">현장 스케치</h1>
            <span className="blue text-3xl">||</span>
            초월 인테리어는 고객의 마음을 사로잡는 독보적인 인테리어를 선보이고 있습니다
          </div>
          <Carousel />
          <hr className="relative top-[5rem] w-[50rem]" />
        </div>
      </div>

      <div className="fourth flex-row flex w-[100%] text-white font-bold ">
        <div className="bg-[#1e90ff] px-[80px] py-[120px] w-[50%] flex gap-10 flex-col bg-[url('https://i.postimg.cc/9Q51Tygr/bluebg.jpg')]">
          <h3 className="text-2xl">COUNSELING</h3>
          <h1 className="text-4xl">성공적인 창업을 원하신다면 ?</h1>
          <button className="bg-white px-4 py-3 text-black w-[50%]">전화문의</button>
        </div>
        <div className="bg-black px-[80px] py-[120px] w-[50%] flex gap-10 flex-col bg-[url('https://i.ibb.co/Fxmndkr/PMERhy-Wn-4x.jpg')]">
          <h3 className="text-2xl">PRICING</h3>
          <h1 className="text-4xl">성공적인 창업을 원하신다면 ?</h1>
          <button className="bg-white px-4 py-3 text-black w-[50%] ">전화문의</button>
        </div>
      </div>

      <div className="third br-2 px-[100px] py-[200px] bg-white text-black flex  justify-center items-center flex-col ">
        <hr className="relative top-[-5rem] w-[50rem]" />
        <div className="flex gap-[5rem] w-[100%]">
          <img
            className="w-[700px] h-[auto]"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA0MTdfMjMx/MDAxNTIzOTUxMDYzOTcw.ACSyxjClNuUscoO7CdlcL8sVXbKDMHhgOT7k9mv173Ig.khqK1jkSd-9mT1gDWziM4WfnI5Epos1AK_S1S-S7-x8g.JPEG.hangagan/20180412_163843.jpg?type=w800"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold">문의 안내</h1>

            <div className="mt-[3rem]">
              대통령은 국가의 원수이며, 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여
              국회재적의원 과반수의 찬성이 있어야 한다. 그 재의를 요구할 수 있다, 모든 국민은 신속한
              재판을 받을 권리를 가진다. 선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당
              또는 후보자에게 부담시킬 수 없다, 모든 국민은 신체의 자유를 가진다. 제1항의 지시를
              받은 당해 행정기관은 이에 응하여야 한다. 1차에 한하여 중임할 수 있다.
            </div>

            <div className="flex gap-[2rem] mt-[3rem] font-bold">
              <button className="bg-black px-4 py-3 text-white">전화문의</button>
              <button className="bg-black px-4 py-3 text-white">상담신청</button>
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
