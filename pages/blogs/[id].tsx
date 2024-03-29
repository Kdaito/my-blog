import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { getAllBlogIds, getBlog } from "../../lib/cms";
import PostLayout from "../../components/PostLayout";
import { formatDate } from "../../lib/date";
import { FaRegUser } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import "highlight.js/styles/github-dark.css";

export async function getStaticPaths() {
  const paths = await getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const blog = await getBlog(context.params!.id);
  return {
    props: {
      blog,
    },
  };
}

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
}) => {
  const router = useRouter();
  const onClickButton = useCallback(() => router.push("/"), [router]);
  return (
    <>
      <Head>
        <title>Hiroto Blog | {blog.title}</title>
        <meta property="description" content={blog.summary} />
        <meta property="og:title" content={`Hiroto Blog | ${blog.title}`} />
        <meta property="og:description" content={blog.summary} />
      </Head>
      <PostLayout>
        <article className="bg-[#fff] px-[15px] md:px-[30px] pt-[10px] pb-[40px] rounded-sm">
          <h1 className="text-[17px] md:text-[32px] font-bold mt-[20px] my-[35px] shadow-md px-[10px] py-[12px] border-l-[5px] border-pointMain-100 rounded-sm">
            {blog.title}
          </h1>
          <div className="flex items-center gap-[15px] my-[10px] text-[14px] md:text-[16px] text-[#5e5e5e]">
            <p className="flex items-center gap-[3px]">
              <BiTimeFive />
              {formatDate(blog.publishedAt)}
            </p>
            <p className="flex items-center gap-[3px]">
              <FaRegUser />
              {blog.author}
            </p>
          </div>
          <p className="text-[13px] md:text-[16px] leading-7 md:leading-8 tracking-wide my-[20px]">
            {blog.summary}
          </p>
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </article>
        <div className="flex items-center w-full justify-center py-[65px]">
          <button
            className="bg-pointMain-100 hover:bg-pointMain-200 text-[#fff] font-medium text-[21px] px-[22px] py-[10px] rounded-[5px]"
            onClick={onClickButton}
          >
            一覧に戻る
          </button>
        </div>
      </PostLayout>
    </>
  );
};

export default Blog;
