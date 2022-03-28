import { Blog } from "../../types/post";
import PostCard from "../PostCard";

type Props = {
  displayPosts: Blog[];
};

const ListLayout: React.VFC<Props> = ({ displayPosts }) => (
  <div className="w-full flex flex-col gap-[20px]">
    {displayPosts.map((post) => (
      <div key={post.id}>
        <PostCard post={post} />
      </div>
    ))}
  </div>
);

export default ListLayout;
