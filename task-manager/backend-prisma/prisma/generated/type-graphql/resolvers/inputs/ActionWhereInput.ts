import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("ActionWhereInput", {
  isAbstract: true
})
export class ActionWhereInput {
  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  AND?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  OR?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  NOT?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  group?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  name?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  target_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  target_type?: StringNullableListFilter | undefined;
}
