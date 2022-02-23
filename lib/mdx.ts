import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostForList, PostMeta } from "../types/post";

const postsDirectory = path.join(process.cwd(), "posts");

// 一覧用のデータを取得する
export const getSortedPostsData = () => {
  // 投稿が保存されているディレクトリから全てのファイルを読み取る
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: PostForList[] = fileNames.map((fileName) => {
    // ファイル名を取り出す(拡張子を外す)
    const id = fileName.replace(/\.(mdx|md)/, "");

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

  return allPostsData.sort(({ date: a, date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

// 個別画面用のデータを取得する
export const getPostData = () => {};
