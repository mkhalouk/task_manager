import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("NotificationMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class NotificationMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  readed_at!: Date | null;
}
