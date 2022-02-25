export type PostMeta = {
  title: string;
  date: string;
  author: string;
};

export type PostMetaWithId = PostMeta & {
  id: string;
};

export type Post = PostMetaWithId & {
  content: string;
};
