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
      {allPostsData.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.author}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
