import { useRouter } from "next/router";
import MainLayout from "../MainLayout";

type Props = {
  children: React.ReactNode;
};

const PostLayout: React.VFC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className="w-screen">
        <div className="h-[70px] bg-pointMain-100 w-full">
          <div className="w-[85%] max-w-[900px] mx-auto my-0">
            <button
              onClick={() => router.push("/")}
              className="text-[#fff] font-bold leading-[70px] text-[24px]"
            >
              Hiroto Blog
            </button>
          </div>
        </div>
        <div className="mt-[50px]">
          <MainLayout>{children}</MainLayout>
        </div>
      </div>
    </>
  );
};

export default PostLayout;
