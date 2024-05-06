export const gql = async (
  query: string,
  variables = {},
  authToken?: string
) => {
  const res = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authToken ? `Bearer ${authToken}` : "",
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await res.json();
  return data;
};
