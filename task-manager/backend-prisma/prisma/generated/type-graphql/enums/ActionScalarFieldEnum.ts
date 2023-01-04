import * as TypeGraphQL from "type-graphql";

export enum ActionScalarFieldEnum {
  id = "id",
  group = "group",
  name = "name",
  created_at = "created_at",
  target_id = "target_id",
  target_type = "target_type"
}
TypeGraphQL.registerEnumType(ActionScalarFieldEnum, {
  name: "ActionScalarFieldEnum",
  description: undefined,
});
