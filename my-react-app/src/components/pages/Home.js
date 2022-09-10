import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home absolute top-0 z-[-20] w-[100%]">
      <div className="firstpage   z-0 flex justify-center items-center flex-col overflow-hidden">
        <h1 className="layout line-1 anim-typewriter text-6xl text-white/100 relative top-8 text-center">
          재외국민 특례 전문 분당 <br />
          <span className="text-6xl text-[#52d5f9]">스카이 </span>
          명문 학원입니다
        </h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "재외국민 특례 전문 분당 <br/> <span class='blue'> 스카이 </span> 명문 학원입니다"
              )
              .callFunction(() => {
                console.log("String typed out!");
              })

              .start();
          }}
        />
        <br />
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
      <div className="text-black">
        <h1>문의 안내</h1>
        <div id="map" className="w-[100%] h-[400px]"></div>
      </div>
    </div>
  );
};

export default Home;
