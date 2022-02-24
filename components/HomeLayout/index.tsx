import Header from "../Header";
import MainLayout from "../MainLayout";

type Props = {
  children: React.ReactNode;
};

const Layout: React.VFC<Props> = ({ children }) => (
  <>
    <div className="w-screen">
      <Header />
      <div className="mt-[370px] sm:mt-[470px] md:mt-[550px] lg:mt-[500px] xl:mt-[600px] 2xl:mt-[40vw]">
        <MainLayout>{children}</MainLayout>
      </div>
    </div>
  </>
);

export default Layout;
