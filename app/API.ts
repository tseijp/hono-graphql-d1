export type CreateUserInput = {
  username: string;
};

export type UpdateUserInput = {
  userId: ID;
  username: string;
};

export type DeleteUserInput = {
  userId: ID;
};

export class UserType {
  userId: ID;
  username: string;

  constructor({ userId, username }: UserType) {
    this.userId = userId;
    this.username = username;
  }
}
