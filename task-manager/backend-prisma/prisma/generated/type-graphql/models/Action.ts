import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Action", {
  isAbstract: true,
  simpleResolvers: true
})
export class Action {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  group!: string[];

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  name!: string[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  target_id!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  target_type!: string[];
}
