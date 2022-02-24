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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[13px]">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </Layout>
    </>
  );
};

export default Home;
