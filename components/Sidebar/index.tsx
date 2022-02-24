import Image from "next/image";

const Sidebar: React.VFC = () => (
  <>
    <div className="w-full h-[590px] bg-[#fff] flex items-center justify-between flex-col px-[15px] py-[40px] rounded-sm">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
        <Image src="/icon.jpg" alt="author icon" layout="fill" />
      </div>
      <div className="text-center">
        <p className="font-medium text-[23px] tracking-wider">小林大斗</p>
        <p className="">kobayashi hiroto</p>
      </div>
      <div className="w-[90%] border my-[15px] border-pointSub-100" />
      <p className="text-[13px]">2001年6月20日生まれ</p>
      <p className="leading-7 text-[14px]">
        愛知県名古屋市出身の20歳。大学進学に伴い、現在は滋賀県で一人暮らしをしている。大学一年生の頃からプログラミングを始め、現在は東京の自社開発企業で長期インターン生としてフロントエンドを中心に開発している。目指せ、webエンジニア
      </p>
    </div>
  </>
);

export default Sidebar;
