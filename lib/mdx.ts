import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetaWithId, PostMeta, Post } from "../types/post";

const postsDirectory = path.join(process.cwd(), "posts/");

// 一覧用の投稿のidをpathから取得する
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.mdx$/, ""),
    },
  }));
};

// 一覧用のデータを取得する
export const getSortedPostsData = () => {
  // 投稿が保存されているディレクトリから全てのファイルを読み取る
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith("mdx"));

  const allPostsData: PostMetaWithId[] = fileNames.map((fileName) => {
    // ファイル名を取り出す(拡張子を外す)
    const id = fileName.replace(/\.mdx$/, "");

    // マークダウンファイルを文字列で読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // メタデータをgray-matterでパースする
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as PostMeta),
    };
  });

  // 日付が新しい投稿が上にくるようにソートする
  allPostsData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });

  return allPostsData;
};

// 個別画面用のデータを取得する
export const getPostData = async (id: string): Promise<Post> => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const content = matterResult.content;

  return {
    id,
    content,
    ...(matterResult.data as PostMeta),
  };
};
