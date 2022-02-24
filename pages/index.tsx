import Layout from "../components/HomeLayout";
import { getSortedPostsData } from "../lib/mdx";
import { PostMetaWithId } from "../types/post";

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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[13px]">
          {/* 投稿カードをマップする */}
        </div>
      </Layout>
    </>
  );
};

export default Home;
