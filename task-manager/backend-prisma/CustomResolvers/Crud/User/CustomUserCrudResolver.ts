import * as TypeGraphQL from "type-graphql";
import { User } from "../../../prisma/generated/type-graphql/models/User";
import { UserCrudResolver } from "../../../prisma/generated/type-graphql/resolvers/crud/User/UserCrudResolver";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserArgs, FindManyUserArgs, FindUniqueUserArgs } from "../../../prisma/generated/type-graphql/resolvers/crud/User/args";
import bcryptjs from 'bcrypt';
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../prisma/generated/type-graphql/helpers";





@TypeGraphQL.Resolver(_of => User)
export class CustomUserCrudResolver extends UserCrudResolver {
    @TypeGraphQL.Mutation(_returns => User, {
        nullable: false
    })
    override async createOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserArgs): Promise<User> {
        const now = new Date();

        //Hashing password
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync("B4c0/\/", salt);

        args.data.created_at = args.data.updated_at = args.data.last_sign_in_at = now;
        args.data.active = true;
        args.data.password_digest = hash;
        return super.createOneUser(ctx, info, args);
    }

    @TypeGraphQL.Mutation(_returns => User, {
        nullable: false
    })
    async loginUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserArgs): Promise<User> {
        const { _count } = transformInfoIntoPrismaArgs(info);
        const users = await getPrismaFromContext(ctx).user.findMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        })
        return users[0];
    }
}