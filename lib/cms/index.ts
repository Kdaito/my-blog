import { Blog, BlogCMSResponse } from "../../types/post";
import { client } from "./client";
import { DISPLAY_COUNT } from "../../pages";

export const getBlogs = async (offset: number): Promise<BlogCMSResponse> => {
  const blogs = await client.get<BlogCMSResponse>({
    endpoint: "blogs",
    queries: { limit: DISPLAY_COUNT, offset },
  });
  return blogs;
};

// DISPLAY_COUNT件ずつ取得する
export const getAllBlogIds = async (): Promise<
  { params: { id: string } }[]
> => {
  const ids: string[] = [];
  // 最初の一回でtotalCountを取得し、何回ループを回せば良いか(totalpage)を計算する
  const cmsFirstResponse = await getBlogs(0);
  const { totalCount, contents } = cmsFirstResponse;

  // 何回ループをまわすのか
  const totalPage = Math.ceil(totalCount / DISPLAY_COUNT);

  contents.forEach((blog) => ids.push(blog.id));

  for (let i = 1; i < totalPage; i++) {
    const cmsResponse = await getBlogs(i * DISPLAY_COUNT);
    const { contents } = cmsResponse;
    contents.forEach((blog) => ids.push(blog.id));
  }

  return ids.map((id) => ({
    params: {
      id,
    },
  }));
};

export const getBlog = async (id: string): Promise<Blog> => {
  const blog = await client.get<Blog>({
    endpoint: "blogs",
    contentId: id,
  });
  return blog;
};
