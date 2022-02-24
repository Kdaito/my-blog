import { useRouter } from "next/router";

type Props = {
  id: string;
};

const PostCard: React.VFC<Props> = ({ id }) => {
  const router = useRouter();
  return (
    <button
      className="w-full h-[300px] text-left rounded-sm hover:scale-105 transition-all"
      onClick={() => router.push(`/posts/${id}`)}
    >
      <div className="w-full h-full bg-[#fff] rounded-sm p-[15px]">
        <p className="overflow-hidden text-[21px] font-medium h-[70px]">
          Next.jsでブログを作成してみた
        </p>
        <div className="my-2 border border-pointMain-100" />
        <p className="overflow-hidden leading-7 h-[145px]">
          こんにちは。今回はタイトルの通り、Next.jsでブログを作成してみたのでその過程をお話ししたいと思います。
        </p>
        <p className="overflow-hidden h-[30px] mt-[5px]">2022-2-24</p>
      </div>
    </button>
  );
};

export default PostCard;
