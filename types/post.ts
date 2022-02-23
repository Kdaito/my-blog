export type PostMeta = {
  title: string;
  date: string;
  author: string;
};

export type PostForList = PostMeta & {
  id: string;
};
