import { DISPLAY_COUNT } from ".";
import Layout from "../components/HomeLayout";
import ListLayout from "../components/ListLayout";
import Pagination, { PaginationProps } from "../components/Pagination";
import { getAllPostIds, getSortedPostsData } from "../lib/mdx";
import { PostMetaWithId } from "../types/post";

export const getStaticPaths = () => {
  const allPosts = getAllPostIds();
  const totalPost = allPosts.length;
  const totalPage = Math.ceil(totalPost / DISPLAY_COUNT);
  const paths = Array.from({ length: totalPage }, (_, i) => ({
    params: {
      page: (i + 1).toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: { page: string } }) {
  const currentPage = parseInt(params.page);
  const allPosts = getSortedPostsData();
  const displayPosts = allPosts.slice(
    DISPLAY_COUNT * currentPage - 1,
    DISPLAY_COUNT * currentPage
  );
  const pagination = {
    currentPage,
    totalPage: allPosts.length,
  };
  return {
    props: {
      displayPosts,
      pagination,
    },
  };
}

const PostPage = ({
  displayPosts,
  pagination: { currentPage, totalPage },
}: {
  displayPosts: PostMetaWithId[];
  pagination: PaginationProps;
}) => {
  return (
    <Layout>
      <div className="w-full">
        <ListLayout displayPosts={displayPosts} />
        <Pagination currentPage={currentPage} totalPage={totalPage} />
      </div>
    </Layout>
  );
};

export default PostPage;
