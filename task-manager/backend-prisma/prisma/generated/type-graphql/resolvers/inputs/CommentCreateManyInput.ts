import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreatetarget_typeInput } from "../inputs/CommentCreatetarget_typeInput";

@TypeGraphQL.InputType("CommentCreateManyInput", {
  isAbstract: true
})
export class CommentCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  owner_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  target_id!: string;

  @TypeGraphQL.Field(_type => CommentCreatetarget_typeInput, {
    nullable: true
  })
  target_type?: CommentCreatetarget_typeInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  parent_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;
}
