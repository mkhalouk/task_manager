import * as customCrudResolversImport from "./Crud/resolvers-crud.index";
import { NonEmptyArray } from "type-graphql";


export const customCrudResolvers = Object.values(customCrudResolversImport) as unknown as NonEmptyArray<Function>;



export const customResolvers = [
  ...customCrudResolvers,
] as unknown as NonEmptyArray<Function>;
