import Image from "next/image";

const Sidebar: React.VFC = () => (
  <>
    <div className="w-full h-[570px] md:h-[300px] lg:h-[620px] bg-[#fff] flex items-center justify-between flex-col md:flex-row lg:flex-col px-[35px] py-[40px] rounded-sm md:border-x-[12px] border-pointSub-100 lg:border-0">
      <div className="h-[180px] md:h-[170px] lg:h-[170px] w-full flex items-center justify-between flex-col">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
          <Image src="/icon.jpg" alt="author icon" layout="fill" />
        </div>
        <div className="text-center">
          <p className="font-medium text-[23px] tracking-wider">小林大斗</p>
          <p className="">kobayashi hiroto</p>
        </div>
      </div>
      <div className="w-full border my-[10px] lg:my-[15px] border-pointSub-100 md:hidden lg:block" />
      <div className="md:px-[40px] lg:px-0">
        <p className="text-[14px] mb-[25px] text-center">
          平成13年6月20日生まれ
        </p>
        <p className="leading-7 text-[14px]">
          愛知県名古屋市出身の20歳。大学進学に伴い、現在は滋賀県で一人暮らしをしている。大学一年生の頃からプログラミングを始め、現在は東京の自社開発企業で長期インターン生としてフロントエンドを中心に開発している。目指せ、webエンジニア。
        </p>
      </div>
    </div>
  </>
);

export default Sidebar;
