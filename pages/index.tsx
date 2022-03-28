import Layout from "../components/HomeLayout";
import ListLayout from "../components/ListLayout";
import Pagination from "../components/Pagination";
import { getBlogs } from "../lib/cms";
import { InferGetStaticPropsType, NextPage } from "next";
import { Blog } from "../types/post";
import { useCallback, useMemo, useState } from "react";

export const DISPLAY_COUNT = 8;

export async function getStaticProps() {
  // 二限配列を生成
  const allPosts: Blog[][] = [];
  // DISPLAY_COUNT件ずつ取得する。最初の一回でtotalCountを取得し、何回cmsから取得すれば良いかを計算する
  const cmsFirstResponse = await getBlogs(0);
  const { contents, totalCount } = cmsFirstResponse;
  const totalPage = Math.ceil(totalCount / DISPLAY_COUNT);
  allPosts.push(contents);
  //  DISPLAY_COUNT件ずつ取得する。
  for (let i = 1; i < totalPage; i++) {
    const cmsResponse = await getBlogs(i * DISPLAY_COUNT);
    allPosts.push(cmsResponse.contents);
  }
  return {
    props: {
      allPosts,
    },
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  allPosts,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const displayPosts: Blog[] = useMemo(
    () => allPosts[currentPage - 1],
    [allPosts, currentPage]
  );

  const onClickNext = useCallback(
    () => setCurrentPage(currentPage + 1),
    [currentPage]
  );
  const onClickPrevious = useCallback(
    () => setCurrentPage(currentPage - 1),
    [currentPage]
  );

  return (
    <>
      <Layout>
        <div className="w-full">
          <ListLayout displayPosts={displayPosts} />
          <Pagination
            totalPage={allPosts.length}
            currentPage={currentPage}
            onClickNext={onClickNext}
            onClickPrevious={onClickPrevious}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
