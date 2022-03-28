import { useRouter } from "next/router";
import { formatDate } from "../../lib/date";
import { Blog } from "../../types/post";

type Props = {
  post: Blog;
};

const PostCard: React.VFC<Props> = ({ post }) => {
  const router = useRouter();
  return (
    <button
      className="w-full h-[300px] text-left rounded-sm lg:hover:scale-105 transition-all"
      onClick={() => router.push(`/blogs/${post.id}`)}
    >
      <div className="w-full h-full bg-[#fff] rounded-sm p-[15px]">
        <p className="overflow-hidden text-[21px] font-medium h-[70px]">
          {post.title}
        </p>
        <div className="my-2 border border-pointMain-100" />
        <p className="overflow-hidden leading-7 h-[145px]">{post.summary}</p>
        <p className="overflow-hidden h-[30px] mt-[5px]">
          {formatDate(post.publishedAt)}
        </p>
      </div>
    </button>
  );
};

export default PostCard;
