import { Suspense, useState } from "react";
import { gql } from "../graphql/client";
import { getUser } from "../graphql/queries";
import { use } from "hono/jsx";
import { UserType } from "../API";

const fetchGetUserData = async () => {
  const data = await gql(getUser, { userId: "a" });
  return data;
};
interface UserDataProps {
  userDataPromise: Promise<{ data: { getUser: UserType } }>;
}

const UserData = (props: UserDataProps) => {
  const { userDataPromise } = props;
  const userData = use(userDataPromise);
  return (
    <div>
      <p>{userData?.data.getUser.userId}</p>
      <p>{userData?.data.getUser.username}</p>
    </div>
  );
};

export default function Counter() {
  const [count, setCount] = useState(0);
  const userData = fetchGetUserData();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Suspense>
        <UserData userDataPromise={userData} />
      </Suspense>
    </div>
  );
}
