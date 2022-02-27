import PostLayout from "../../components/PostLayout";
import { getAllPostIds, getPostData } from "../../lib/mdx";
import ReactMarkdown from "react-markdown";
import { Post } from "../../types/post";
import CodeBlock from "../../components/CodeBlock";
import {
  A,
  BlockQuote,
  H1,
  H2,
  H3,
  HR,
  LI,
  OL,
  P,
  UL,
} from "../../components/CustomElements";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <>
      <PostLayout>
        <div className="bg-[#fff] px-[30px] py-[40px] rounded-sm">
          <ReactMarkdown
            // eslint-disable-next-line react/no-children-prop
            children={postData.content}
            components={{
              code: CodeBlock,
              h1: H1,
              h2: H2,
              h3: H3,
              p: P,
              a: A,
              ul: UL,
              ol: OL,
              li: LI,
              hr: HR,
              blockquote: BlockQuote,
            }}
          />
        </div>
        <div className="flex items-center w-full justify-center py-[65px]">
          <button
            className="bg-pointMain-100 hover:bg-pointMain-200 text-[#fff] font-medium text-[21px] px-[22px] py-[10px] rounded-[5px]"
            onClick={() => router.push("/")}
          >
            一覧に戻る
          </button>
        </div>
      </PostLayout>
    </>
  );
};

export default Post;
