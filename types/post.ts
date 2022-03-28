export type PostMeta = {
  title: string;
  date: string;
  author: string;
  discription: string;
};

export type PostMetaWithId = PostMeta & {
  id: string;
};

export type Post = PostMetaWithId & {
  content: string;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  author: string;
  summary: string;
  content: string;
};

export type BlogCMSResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};
