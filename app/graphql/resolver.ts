import { UserType } from "../API";

export const rootResolver = (c: any) => {
  const getUser = async ({ userId }: UserType) => {
    const { results } = await c.env.DB.prepare(
      `SELECT * FROM user WHERE userId = ?`
    )
      .bind(userId)
      .run();
    console.log(results);
    return results[0];
  };

  const listUsers = async ({ limit = -1 }: { limit: number }) => {
    const { results } = await c.env.DB.prepare(`SELECT * FROM user LIMIT ?`)
      .bind(limit)
      .run();
    return results;
  };

  const getPost = async ({ postId }: { postId: string }) => {
    const { results } = await c.env.DB.prepare(
      `SELECT * FROM post WHERE postId = ?`
    )
      .bind(postId)
      .run();
    return results[0];
  };

  const listPosts = async ({ limit = -1 }: { limit: number }) => {
    const { results } = await c.env.DB.prepare(`SELECT * FROM post LIMIT ?`)
      .bind(limit)
      .run();
    return results;
  };

  return {
    getUser,
    listUsers,
    getPost,
    listPosts,
  };
};
