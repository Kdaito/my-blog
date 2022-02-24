import Footer from "../Footer";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.VFC<Props> = ({ children }) => (
  <>
    <div className="w-[350px] md:w-[700px] lg:w-[900px] my-0 mx-auto min-h-[100vh] flex flex-col lg:flex-row lg:justify-between pb-[200px]">
      <div className="lg:w-[640px]">{children}</div>
      <div className="mt-[100px] lg:m-0 lg:w-[240px]">
        <Sidebar />
      </div>
    </div>
    <div className="w-full">
      <Footer />
    </div>
  </>
);

export default MainLayout;
