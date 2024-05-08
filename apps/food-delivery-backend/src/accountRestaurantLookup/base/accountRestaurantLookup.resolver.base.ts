/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AccountRestaurantLookup } from "./AccountRestaurantLookup";
import { AccountRestaurantLookupCountArgs } from "./AccountRestaurantLookupCountArgs";
import { AccountRestaurantLookupFindManyArgs } from "./AccountRestaurantLookupFindManyArgs";
import { AccountRestaurantLookupFindUniqueArgs } from "./AccountRestaurantLookupFindUniqueArgs";
import { CreateAccountRestaurantLookupArgs } from "./CreateAccountRestaurantLookupArgs";
import { UpdateAccountRestaurantLookupArgs } from "./UpdateAccountRestaurantLookupArgs";
import { DeleteAccountRestaurantLookupArgs } from "./DeleteAccountRestaurantLookupArgs";
import { Account } from "../../account/base/Account";
import { Restaurant } from "../../restaurant/base/Restaurant";
import { AccountRestaurantLookupService } from "../accountRestaurantLookup.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountRestaurantLookup)
export class AccountRestaurantLookupResolverBase {
  constructor(
    protected readonly service: AccountRestaurantLookupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AccountRestaurantLookup",
    action: "read",
    possession: "any",
  })
  async _accountRestaurantLookupsMeta(
    @graphql.Args() args: AccountRestaurantLookupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AccountRestaurantLookup])
  @nestAccessControl.UseRoles({
    resource: "AccountRestaurantLookup",
    action: "read",
    possession: "any",
  })
  async accountRestaurantLookups(
    @graphql.Args() args: AccountRestaurantLookupFindManyArgs
  ): Promise<AccountRestaurantLookup[]> {
    return this.service.accountRestaurantLookups(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AccountRestaurantLookup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AccountRestaurantLookup",
    action: "read",
    possession: "own",
  })
  async accountRestaurantLookup(
    @graphql.Args() args: AccountRestaurantLookupFindUniqueArgs
  ): Promise<AccountRestaurantLookup | null> {
    const result = await this.service.accountRestaurantLookup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccountRestaurantLookup)
  @nestAccessControl.UseRoles({
    resource: "AccountRestaurantLookup",
    action: "create",
    possession: "any",
  })
  async createAccountRestaurantLookup(
    @graphql.Args() args: CreateAccountRestaurantLookupArgs
  ): Promise<AccountRestaurantLookup> {
    return await this.service.createAccountRestaurantLookup({
      ...args,
      data: {
        ...args.data,

        accounts: {
          connect: args.data.accounts,
        },

        restaurants: {
          connect: args.data.restaurants,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccountRestaurantLookup)
  @nestAccessControl.UseRoles({
    resource: "AccountRestaurantLookup",
    action: "update",
    possession: "any",
  })
  async updateAccountRestaurantLookup(
    @graphql.Args() args: UpdateAccountRestaurantLookupArgs
  ): Promise<AccountRestaurantLookup | null> {
    try {
      return await this.service.updateAccountRestaurantLookup({
        ...args,
        data: {
          ...args.data,

          accounts: {
            connect: args.data.accounts,
          },

          restaurants: {
            connect: args.data.restaurants,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AccountRestaurantLookup)
  @nestAccessControl.UseRoles({
    resource: "AccountRestaurantLookup",
    action: "delete",
    possession: "any",
  })
  async deleteAccountRestaurantLookup(
    @graphql.Args() args: DeleteAccountRestaurantLookupArgs
  ): Promise<AccountRestaurantLookup | null> {
    try {
      return await this.service.deleteAccountRestaurantLookup(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "accounts",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getAccounts(
    @graphql.Parent() parent: AccountRestaurantLookup
  ): Promise<Account | null> {
    const result = await this.service.getAccounts(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Restaurant, {
    nullable: true,
    name: "restaurants",
  })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async getRestaurants(
    @graphql.Parent() parent: AccountRestaurantLookup
  ): Promise<Restaurant | null> {
    const result = await this.service.getRestaurants(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}