import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ActionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ActionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ActionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ActionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  group?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  name?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  target_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  target_type?: StringNullableListFilter | undefined;
}
