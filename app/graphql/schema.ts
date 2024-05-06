export const typeDefs = /* GraphQL */ `
input CreateUserInput {
  userId: ID!
  username: String
}

input UpdateUserInput {
  userId: ID!
  username: String
}

input DeleteUserInput {
  userId: ID!
}

type User {
  userId: ID!
  username: String
}

type Query {
  getUser(userId: ID!): User
  listUsers(limit: Int): [User]
}
`;