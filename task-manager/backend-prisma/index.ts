import "reflect-metadata";
import * as TypeGraphQL from "type-graphql";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers as generatedResolvers } from "./prisma/generated/type-graphql";
import { customResolvers } from "./CustomResolvers/index";


import { RedisPubSub } from 'graphql-redis-subscriptions';

interface Context {
  prisma: PrismaClient;
}

const pubSub = new RedisPubSub({
  messageEventName: 'messageBuffer',
  pmessageEventName: 'pmessageBuffer',
});


const resolvers = [
  ...customResolvers,
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
    cors: {
      origin: ['http://localhost:8000' , 'https://studio.apollographql.com'],            // <- allow request from all domains
      credentials: true},
    schema,
    context: (): Context => ({ prisma }),
    introspection: true,
  });
  

  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
