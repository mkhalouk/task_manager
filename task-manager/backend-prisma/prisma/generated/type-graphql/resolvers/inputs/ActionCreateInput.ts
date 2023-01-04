import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreategroupInput } from "../inputs/ActionCreategroupInput";
import { ActionCreatenameInput } from "../inputs/ActionCreatenameInput";
import { ActionCreatetarget_typeInput } from "../inputs/ActionCreatetarget_typeInput";

@TypeGraphQL.InputType("ActionCreateInput", {
  isAbstract: true
})
export class ActionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ActionCreategroupInput, {
    nullable: true
  })
  group?: ActionCreategroupInput | undefined;

  @TypeGraphQL.Field(_type => ActionCreatenameInput, {
    nullable: true
  })
  name?: ActionCreatenameInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  target_id!: string;

  @TypeGraphQL.Field(_type => ActionCreatetarget_typeInput, {
    nullable: true
  })
  target_type?: ActionCreatetarget_typeInput | undefined;
}
