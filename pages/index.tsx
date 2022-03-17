import { getSortedPostsData } from "../lib/mdx";
import { PostMetaWithId } from "../types/post";
import Layout from "../components/HomeLayout";
import ListLayout from "../components/ListLayout";
import Pagination, { PaginationProps } from "../components/Pagination";

export const DISPLAY_COUNT = 8;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const displayPosts = allPostsData.slice(0, DISPLAY_COUNT);
  const pagination = {
    currentPage: 1,
    totalPage: Math.ceil(allPostsData.length / DISPLAY_COUNT),
  };
  return {
    props: {
      displayPosts,
      pagination,
    },
  };
}

const Home = ({
  displayPosts,
  pagination: { totalPage, currentPage },
}: {
  displayPosts: PostMetaWithId[];
  pagination: PaginationProps;
}) => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <ListLayout displayPosts={displayPosts} />
          <Pagination totalPage={totalPage} currentPage={currentPage} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
