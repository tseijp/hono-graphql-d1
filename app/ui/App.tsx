// @ts-ignore
import { Suspense, useMemo, use } from "react";
import { Layout } from "./Layout";
import { UserData } from "./UserData";
import { getUser, listPosts } from "../graphql/queries";
import { gql } from "../graphql/client";
import { PostCard } from "./PostCard";
import { PostCards } from "./PostCards";

export const App = () => {
  const userItem = useMemo(async () => await gql(getUser, { userId: "c" }), []);
  const postList = useMemo(async () => await gql(listPosts), []);

  return (
    <Layout>
      <Suspense>
        <UserData userDataPromise={userItem} />
      </Suspense>
      <Suspense>
        <PostCards postListPromise={postList}>
          {(post) => <PostCard key={post.postId} {...post} />}
        </PostCards>
      </Suspense>
    </Layout>
  );
};
