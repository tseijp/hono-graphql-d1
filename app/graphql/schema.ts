export const typeDefs = /* GraphQL */ `
  type User {
    userId: ID!
    username: String
    createdAt: String
    updatedAt: String
  }

  type Post {
    postId: ID!
    userId: ID!
    parent: ID
    content: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getUser(userId: ID!): User
    listUsers(limit: Int): [User]
    getPost(postId: ID!): Post
    listPosts(limit: Int): [Post]
  }
`;
