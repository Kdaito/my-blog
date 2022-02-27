import Head from "next/head";
import Header from "../Header";
import MainLayout from "../MainLayout";

type Props = {
  children: React.ReactNode;
};

const Layout: React.VFC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Hiroto Blog</title>
      <meta
        property="description"
        content="名古屋出身の大学生によるブログです。文系大学に通う傍ら、webエンジニアを目指して勉強中です。現在は東京の自社開発企業で長期インターン生として勉強させてもらっています。"
      />
      <meta property="og:title" content="Hiroto Blog" />
      <meta
        property="og:description"
        content="名古屋出身の大学生によるブログです。文系大学に通う傍ら、webエンジニアを目指して勉強中です。現在は東京の自社開発企業で長期インターン生として勉強させてもらっています。"
      />
      {/* <meta property="og:image" content={data.thumbnailUrl} /> */}
    </Head>
    <div className="w-screen">
      <Header />
      <div className="mt-[370px] sm:mt-[470px] md:mt-[550px] lg:mt-[500px] xl:mt-[600px] 2xl:mt-[40vw]">
        <MainLayout>{children}</MainLayout>
      </div>
    </div>
  </>
);

export default Layout;
