export const getUser = /* GraphQL */ `
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      userId
      username
    }
  }
`;

export const listUsers = /* GraphQL */ `
  query ListUsers {
    listUsers {
      userId
      username
    }
  }
`;
