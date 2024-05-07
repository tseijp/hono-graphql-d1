// @ts-ignore
import { use } from "react";
import { UserType } from "../API";

export interface UserDataProps {
  userDataPromise: Promise<{ data: { getUser: UserType } }>;
}

export const UserData = (props: UserDataProps) => {
  const { userDataPromise } = props;
  const userData = use(userDataPromise);
  return (
    <div>
      <p>ID: {userData?.data.getUser.userId}</p>
      <p>
        <span className="text-4">
          Hello {userData?.data.getUser.username} !
        </span>
      </p>
    </div>
  );
};
