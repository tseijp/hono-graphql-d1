import { PostType } from "../API";

export interface PostCardProps extends PostType {}

export const PostCard = (props: PostCardProps) => {
  console.log(props)
  const { postId, userId, content} = props;
  return (
    <div className="w-auto h-32 rounted shadow-md border-gray-800">
      <div className="flex h-full p-4 items-start justify-center">
        <h1>{postId}</h1>
        <h3>{userId}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}