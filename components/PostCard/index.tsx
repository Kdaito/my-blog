import { useRouter } from "next/router";
import { formatDate } from "../../lib/date";
import { Blog } from "../../types/post";
import { FaRegUser } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

type Props = {
  post: Blog;
};

const PostCard: React.VFC<Props> = ({ post }) => {
  const router = useRouter();
  return (
    <button
      className="w-full text-left rounded-sm lg:hover:scale-105 transition-all"
      onClick={() => router.push(`/blogs/${post.id}`)}
    >
      <div className="w-full h-full bg-[#fff] rounded-sm p-[15px] md:p-[30px]">
        <p className="text-[21px] font-medium">{post.title}</p>
        <div className="my-2 border border-pointMain-100" />
        <div className="flex items-center gap-[15px] my-[10px] text-[14px] text-[#5e5e5e]">
          <p className="flex items-center gap-[3px]">
            <BiTimeFive />
            {formatDate(post.publishedAt)}
          </p>
          <p className="flex items-center gap-[3px]">
            <FaRegUser />
            {post.author}
          </p>
        </div>
        <p className="leading-7 mb-[10px]">{post.summary}</p>
      </div>
    </button>
  );
};

export default PostCard;
