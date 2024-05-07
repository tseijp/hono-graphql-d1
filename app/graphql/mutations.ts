export const createUser = /* GraphQL */ `
  mutation CreateUser($input: UserType!) {
    createUser(input: $input) {
      userId
      username
    }
  }
`;

export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UserType!) {
    updateUser(input: $input) {
      userId
      username
    }
  }
`;

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: UserType!) {
    deleteUser(input: $input) {
      userId
      username
    }
  }
`;

export const createPost = /* GraphQL */ `
  mutation CreatePost($input: PostType!) {
    createPost(input: $input) {
      postId
      title
    }
  }
`;

export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: PostType!) {
    updatePost(input: $input) {
      postId
      title
    }
  }
`;

export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: PostType!) {
    deletePost(input: $input) {
      postId
      title
    }
  }
`;
