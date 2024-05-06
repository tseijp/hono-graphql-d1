import { UserType } from "../API";

const fakeDatabase = {
  a: {
    userId: "a",
    username: "alice",
  },
  b: {
    userId: "b",
    username: "bob",
  },
} as Record<string, UserType>

export const rootResolver = (_ctx: unknown) => {
  return {
    getUser({ userId }: UserType) {
      return new UserType(fakeDatabase[userId]);
    },
    listUsers() {
      return Object.values(fakeDatabase).map((user: UserType) => new UserType(user));
    },
  };
};
