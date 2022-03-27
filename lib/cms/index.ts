import { BlogCMSResponse } from "../../types/post";
import { client } from "./client";

export const getBlogs = async (
  limit: number,
  offset: number
): Promise<BlogCMSResponse> => {
  const blogs = await client.get<BlogCMSResponse>({
    endpoint: "blogs",
    queries: { limit, offset },
  });
  return blogs;
};
