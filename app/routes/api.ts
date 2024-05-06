import { graphqlServer } from "@hono/graphql-server";
import { createRoute } from "honox/factory";
import { buildSchema } from "graphql";
import { typeDefs } from "../graphql/schema";
import { rootResolver } from "../graphql/resolver";

const schema = buildSchema(typeDefs);

export const POST = createRoute(
  graphqlServer({
    schema,
    rootResolver,
  })
);
