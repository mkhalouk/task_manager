import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCountAggregate } from "../outputs/ActionCountAggregate";
import { ActionMaxAggregate } from "../outputs/ActionMaxAggregate";
import { ActionMinAggregate } from "../outputs/ActionMinAggregate";

@TypeGraphQL.ObjectType("ActionGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class ActionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  group!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  name!: string[] | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  target_id!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  target_type!: string[] | null;

  @TypeGraphQL.Field(_type => ActionCountAggregate, {
    nullable: true
  })
  _count!: ActionCountAggregate | null;

  @TypeGraphQL.Field(_type => ActionMinAggregate, {
    nullable: true
  })
  _min!: ActionMinAggregate | null;

  @TypeGraphQL.Field(_type => ActionMaxAggregate, {
    nullable: true
  })
  _max!: ActionMaxAggregate | null;
}
