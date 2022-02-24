import Image from "next/image";

const Header: React.VFC = () => (
  <>
    <div className="w-full absolute top-0">
      <div className="bg-[#fff] h-[160px] md:h-[110px] lg:h-0" />
      <div className="w-full h-[900px] relative">
        <Image
          src="/header.svg"
          alt="header"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        />
      </div>
    </div>
    <div className="absolute w-full top-[15vw] lg:top-[10vw]">
      <h1 className="w-full text-[42px] lg:text-[64px] font-bold mb-[7px] text-center tracking-wide">
        <span className="text-pointMain-100">H</span>iroto{" "}
        <span className="text-pointSub-100">B</span>log
      </h1>
      <p className="text-center text-[14px] lg:text-[17px] font-medium">
        〜 WEBエンジニアになりたい文系大学生 〜
      </p>
    </div>
  </>
);

export default Header;
