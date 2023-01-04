import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AssigneeWhereInput", {
  isAbstract: true
})
export class AssigneeWhereInput {
  @TypeGraphQL.Field(_type => [AssigneeWhereInput], {
    nullable: true
  })
  AND?: AssigneeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereInput], {
    nullable: true
  })
  OR?: AssigneeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereInput], {
    nullable: true
  })
  NOT?: AssigneeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  task_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;
}
