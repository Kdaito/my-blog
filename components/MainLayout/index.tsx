import Sidebar from '../Sidebar';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.VFC<Props> = ({ children }) => (
  <>
    <div className="w-[350px] md:w-[700px] lg:w-[900px] my-0 mx-auto min-h-[100vh] flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:w-[650px]">{children}</div>
      <div className="lg:w-[250px]">
        <Sidebar />
      </div>
    </div>
  </>
);

export default MainLayout;
