import * as TypeGraphQL from "type-graphql";
import { TaskCrudResolver } from "../../../prisma/generated/type-graphql/resolvers/crud/Task/TaskCrudResolver";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTaskArgs } from "../../../prisma/generated/type-graphql/resolvers/crud/Task/args";
import { Task } from "../../../prisma/generated/type-graphql/models";





@TypeGraphQL.Resolver(_of => Task)
export class CustomTaskCrudResolver extends TaskCrudResolver {
    @TypeGraphQL.Mutation(_returns => Task, {
        nullable: false
      })
    override async createOneTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTaskArgs): Promise<Task> {
        const now = new Date();

        args.data.created_at = args.data.updated_at =  args.data.due_at = now;

        


        return super.createOneTask(ctx, info, args);
    } 
}