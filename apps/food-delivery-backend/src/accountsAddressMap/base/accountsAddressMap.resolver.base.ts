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
import { AccountsAddressMap } from "./AccountsAddressMap";
import { AccountsAddressMapCountArgs } from "./AccountsAddressMapCountArgs";
import { AccountsAddressMapFindManyArgs } from "./AccountsAddressMapFindManyArgs";
import { AccountsAddressMapFindUniqueArgs } from "./AccountsAddressMapFindUniqueArgs";
import { CreateAccountsAddressMapArgs } from "./CreateAccountsAddressMapArgs";
import { UpdateAccountsAddressMapArgs } from "./UpdateAccountsAddressMapArgs";
import { DeleteAccountsAddressMapArgs } from "./DeleteAccountsAddressMapArgs";
import { Account } from "../../account/base/Account";
import { Address } from "../../address/base/Address";
import { AccountsAddressMapService } from "../accountsAddressMap.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountsAddressMap)
export class AccountsAddressMapResolverBase {
  constructor(
    protected readonly service: AccountsAddressMapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AccountsAddressMap",
    action: "read",
    possession: "any",
  })
  async _accountsAddressMapsMeta(
    @graphql.Args() args: AccountsAddressMapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AccountsAddressMap])
  @nestAccessControl.UseRoles({
    resource: "AccountsAddressMap",
    action: "read",
    possession: "any",
  })
  async accountsAddressMaps(
    @graphql.Args() args: AccountsAddressMapFindManyArgs
  ): Promise<AccountsAddressMap[]> {
    return this.service.accountsAddressMaps(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AccountsAddressMap, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AccountsAddressMap",
    action: "read",
    possession: "own",
  })
  async accountsAddressMap(
    @graphql.Args() args: AccountsAddressMapFindUniqueArgs
  ): Promise<AccountsAddressMap | null> {
    const result = await this.service.accountsAddressMap(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccountsAddressMap)
  @nestAccessControl.UseRoles({
    resource: "AccountsAddressMap",
    action: "create",
    possession: "any",
  })
  async createAccountsAddressMap(
    @graphql.Args() args: CreateAccountsAddressMapArgs
  ): Promise<AccountsAddressMap> {
    return await this.service.createAccountsAddressMap({
      ...args,
      data: {
        ...args.data,

        accounts: {
          connect: args.data.accounts,
        },

        addresses: {
          connect: args.data.addresses,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AccountsAddressMap)
  @nestAccessControl.UseRoles({
    resource: "AccountsAddressMap",
    action: "update",
    possession: "any",
  })
  async updateAccountsAddressMap(
    @graphql.Args() args: UpdateAccountsAddressMapArgs
  ): Promise<AccountsAddressMap | null> {
    try {
      return await this.service.updateAccountsAddressMap({
        ...args,
        data: {
          ...args.data,

          accounts: {
            connect: args.data.accounts,
          },

          addresses: {
            connect: args.data.addresses,
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

  @graphql.Mutation(() => AccountsAddressMap)
  @nestAccessControl.UseRoles({
    resource: "AccountsAddressMap",
    action: "delete",
    possession: "any",
  })
  async deleteAccountsAddressMap(
    @graphql.Args() args: DeleteAccountsAddressMapArgs
  ): Promise<AccountsAddressMap | null> {
    try {
      return await this.service.deleteAccountsAddressMap(args);
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
    @graphql.Parent() parent: AccountsAddressMap
  ): Promise<Account | null> {
    const result = await this.service.getAccounts(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Address, {
    nullable: true,
    name: "addresses",
  })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async getAddresses(
    @graphql.Parent() parent: AccountsAddressMap
  ): Promise<Address | null> {
    const result = await this.service.getAddresses(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
