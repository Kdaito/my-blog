import { Post, PostMetaWithId } from "../../types/post";
import PostCard from "../PostCard";

type Props = {
  displayPosts: PostMetaWithId[];
};

const ListLayout: React.VFC<Props> = ({ displayPosts }) => (
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[13px]">
    {displayPosts.map((post) => (
      <div key={post.id}>
        <PostCard postMeta={post} />
      </div>
    ))}
  </div>
);

export default ListLayout;