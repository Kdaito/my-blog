import PostLayout from "../../components/PostLayout";
import { getAllPostIds, getPostData } from "../../lib/mdx";
import { Post } from "../../types/post";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

type Props = {
  postData: Post;
};

const Post: React.VFC<Props> = ({ postData }) => {
  return (
    <>
      <PostLayout>
        <div className="bg-[#fff] px-[30px] py-[40px] rounded-sm">
          <p>{postData.id}</p>
          <p>{postData.author}</p>
          <p>{postData.date}</p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </PostLayout>
    </>
  );
};

export default Post;
