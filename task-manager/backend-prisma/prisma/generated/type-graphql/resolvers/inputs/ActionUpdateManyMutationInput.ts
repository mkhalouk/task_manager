import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionUpdategroupInput } from "../inputs/ActionUpdategroupInput";
import { ActionUpdatenameInput } from "../inputs/ActionUpdatenameInput";
import { ActionUpdatetarget_typeInput } from "../inputs/ActionUpdatetarget_typeInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionUpdateManyMutationInput", {
  isAbstract: true
})
export class ActionUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionUpdategroupInput, {
    nullable: true
  })
  group?: ActionUpdategroupInput | undefined;

  @TypeGraphQL.Field(_type => ActionUpdatenameInput, {
    nullable: true
  })
  name?: ActionUpdatenameInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  target_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionUpdatetarget_typeInput, {
    nullable: true
  })
  target_type?: ActionUpdatetarget_typeInput | undefined;
}
