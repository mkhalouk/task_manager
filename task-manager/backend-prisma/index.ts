import "reflect-metadata";
import * as TypeGraphQL from "type-graphql";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers as generatedResolvers } from "./prisma/generated/type-graphql";

import { RedisPubSub } from 'graphql-redis-subscriptions';






const express = require('express')
const app = express()
const port = 5000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})





interface Context {
  prisma: PrismaClient;
}

const pubSub = new RedisPubSub({
  messageEventName: 'messageBuffer',
  pmessageEventName: 'pmessageBuffer',
});



const resolvers = [
  ...generatedResolvers,
] as TypeGraphQL.NonEmptyArray<Function>;

async function main() {
  const schema = await TypeGraphQL.buildSchema({
    resolvers,
    pubSub,
    emitSchemaFile: "./generated-schema.graphql",
    validate: false,
  });

  const prisma = new PrismaClient();
  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
    introspection: true,
  });
  

  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
