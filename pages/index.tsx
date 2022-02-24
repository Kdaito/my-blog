import { getSortedPostsData } from "../lib/mdx";
import { PostMetaWithId } from "../types/post";
import Layout from "../components/HomeLayout";
import PostCard from "../components/PostCard";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: PostMetaWithId[];
};

const Home: React.VFC<Props> = ({ allPostsData }) => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[13px]">
            {allPostsData.map((post) => (
              <div key={post.id}>
                <PostCard id={post.id} />
              </div>
            ))}
          </div>
          <div className="flex items-center w-full justify-center py-[65px]">
            <button className="bg-pointMain-100 hover:bg-pointMain-200 text-[#fff] font-bold text-[21px] px-[22px] py-[10px] rounded-[5px]">
              もっと見る
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
