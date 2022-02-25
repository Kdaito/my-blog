import { useRouter } from "next/router";
import { PostMetaWithId } from "../../types/post";

type Props = {
  postMeta: PostMetaWithId;
};

const PostCard: React.VFC<Props> = ({ postMeta }) => {
  const router = useRouter();
  return (
    <button
      className="w-full h-[300px] text-left rounded-sm hover:scale-105 transition-all"
      onClick={() => router.push(`/posts/${postMeta.id}`)}
    >
      <div className="w-full h-full bg-[#fff] rounded-sm p-[15px]">
        <p className="overflow-hidden text-[21px] font-medium h-[70px]">
          {postMeta.title}
        </p>
        <div className="my-2 border border-pointMain-100" />
        <p className="overflow-hidden leading-7 h-[145px]">
          {postMeta.discription}
        </p>
        <p className="overflow-hidden h-[30px] mt-[5px]">{postMeta.date}</p>
      </div>
    </button>
  );
};

export default PostCard;
