// create react boiler plate

const Footer = () => {
  return (
    <div className="py-[40px] gap-7 bg-black flex flex-col justify-center items-left px-[100px]">
      <ul className="flex flex-row gap-8 ">
        <li>홈</li>
        <li>학원소개</li>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
      </ul>
      <ul className="flex flex-row gap-8 text-xs text-white/50 ">
        <li>회사명 : SKY 명문학원</li>
        <li>대표자 : 김상백</li>
        <li>주소 : 서울 강남구 선릉로64길 18 4층</li>
        <li>이메일 : guksins@naver.com</li>
        <li>전화 : 02-553-1217</li>
        <li>사업자등록번호 : 123-45-67890</li>
      </ul>
    </div>
  );
};

export default Footer;
