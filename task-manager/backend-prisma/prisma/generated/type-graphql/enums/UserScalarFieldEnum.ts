import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  password = "password",
  password_digest = "password_digest",
  active = "active",
  preferences = "preferences",
  email = "email",
  last_sign_in_at = "last_sign_in_at",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
