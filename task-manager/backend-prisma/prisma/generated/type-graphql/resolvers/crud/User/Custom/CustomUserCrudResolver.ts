import * as TypeGraphQL from "type-graphql";
import { User } from "../../../../models/User";
import { UserCrudResolver } from "../UserCrudResolver";
import type { GraphQLResolveInfo } from "graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../../../../helpers";
import { CreateOneUserArgs } from "../args";
import bcryptjs from 'bcrypt';





@TypeGraphQL.Resolver(_of => User)
export class CustomUserCrudResolver extends UserCrudResolver{
    @TypeGraphQL.Mutation(_returns => User, {
        nullable: false
      })
    override async createOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserArgs): Promise<User> {
        const now = new Date();

        //Hashing password
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync("B4c0/\/", salt);

        args.data.created_at = args.data.updated_at =  args.data.last_sign_in_at = now;
        args.data.active = true;
        args.data.password_digest = hash;
        return super.createOneUser(ctx, info, args);
    } 
}