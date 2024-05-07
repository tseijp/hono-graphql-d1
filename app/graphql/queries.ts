export const getUser = /* GraphQL */ `
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      userId
      username
    }
  }
`;

export const listUsers = /* GraphQL */ `
  query ListUsers($limit: Int) {
    listUsers(limit: $limit) {
      userId
      username
    }
  }
`;

export const getPost = /* GraphQL */ `
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      postId
      userId
    }
  }
`;

export const listPosts = /* GraphQL */ `
  query ListPosts($limit: Int) {
    listPosts(limit: $limit) {
      postId
      userId
    }
  }
`;