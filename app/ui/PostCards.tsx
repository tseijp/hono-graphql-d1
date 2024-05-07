// @ts-ignore
import { use } from "react";

export interface PostCardsProps {
  children: (post: any) => React.ReactNode;
  postListPromise: Promise<{ data: { listPosts: PostType[] } }>;
}

export const PostCards = (props: PostCardsProps) => {
  const { children, postListPromise } = props;
  const { data } = use(postListPromise);

  if (!data?.listPosts) return null;
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {data.listPosts.map(children)}
    </div>
  );
};
