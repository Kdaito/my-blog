import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { getAllBlogIds, getBlog } from "../../lib/cms";
import PostLayout from "../../components/PostLayout";
import { formatDate } from "../../lib/date";

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
        <article className="bg-[#fff] px-[30px] py-[40px] rounded-sm">
          <h1 className="text-[17px] md:text-[32px] font-bold mt-[20px] my-[35px] shadow-md px-[10px] py-[12px] border-l-[5px] border-pointMain-100 rounded-sm">
            {blog.title}
          </h1>
          <div className="text-[#999] pb-[10px]">
            <p>著者: {blog.author}</p>
            <p>公開日: {formatDate(blog.publishedAt)}</p>
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
