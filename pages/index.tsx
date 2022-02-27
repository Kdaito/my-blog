import { getSortedPostsData } from "../lib/mdx";
import { PostMetaWithId } from "../types/post";
import Layout from "../components/HomeLayout";
import PostCard from "../components/PostCard";
import { useEffect, useMemo, useState } from "react";

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

const DISPLAY_COUNT = 8;

const Home: React.VFC<Props> = ({ allPostsData }) => {
  const [postDataForDisplay, setPostDataForDisplay] = useState<
    PostMetaWithId[]
  >([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    allPostsData.splice(0, 1);
  }, [allPostsData]);

  useEffect(() => {
    const start = count * DISPLAY_COUNT;
    const end = (count + 1) * DISPLAY_COUNT;
    setPostDataForDisplay([
      ...postDataForDisplay,
      ...allPostsData.slice(start, end),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPostsData, count]);

  const isButtonHidden: boolean = useMemo(() => {
    if (Math.floor(allPostsData.length / DISPLAY_COUNT) === count) return true;
    return false;
  }, [allPostsData.length, count]);

  return (
    <>
      <Layout>
        <div className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[13px]">
            {postDataForDisplay.map((post) => (
              <div key={post.id}>
                <PostCard postMeta={post} />
              </div>
            ))}
          </div>
          {!isButtonHidden && (
            <div className="flex items-center w-full justify-center py-[65px]">
              <button
                className="bg-pointMain-100 hover:bg-pointMain-200 text-[#fff] font-bold text-[21px] px-[22px] py-[10px] rounded-[5px]"
                onClick={() => setCount(count + 1)}
              >
                もっと見る
              </button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
