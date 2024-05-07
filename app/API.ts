export interface UserType {
  userId: string;
  username: string;
}

export class UserType {
  constructor(constructor: UserType) {
    Object.assign(this, constructor);
  }
}

export interface PostType {
  postId: string;
  userId: string;
  title: string;
  content: string;
}
export class PostType {
  constructor(constructor: PostType) {
    Object.assign(this, constructor);
  }
}
