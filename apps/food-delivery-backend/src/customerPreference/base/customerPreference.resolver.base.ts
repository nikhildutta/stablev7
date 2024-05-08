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
import { CustomerPreference } from "./CustomerPreference";
import { CustomerPreferenceCountArgs } from "./CustomerPreferenceCountArgs";
import { CustomerPreferenceFindManyArgs } from "./CustomerPreferenceFindManyArgs";
import { CustomerPreferenceFindUniqueArgs } from "./CustomerPreferenceFindUniqueArgs";
import { CreateCustomerPreferenceArgs } from "./CreateCustomerPreferenceArgs";
import { UpdateCustomerPreferenceArgs } from "./UpdateCustomerPreferenceArgs";
import { DeleteCustomerPreferenceArgs } from "./DeleteCustomerPreferenceArgs";
import { AppUser } from "../../appUser/base/AppUser";
import { CustomerPreferenceService } from "../customerPreference.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerPreference)
export class CustomerPreferenceResolverBase {
  constructor(
    protected readonly service: CustomerPreferenceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CustomerPreference",
    action: "read",
    possession: "any",
  })
  async _customerPreferencesMeta(
    @graphql.Args() args: CustomerPreferenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CustomerPreference])
  @nestAccessControl.UseRoles({
    resource: "CustomerPreference",
    action: "read",
    possession: "any",
  })
  async customerPreferences(
    @graphql.Args() args: CustomerPreferenceFindManyArgs
  ): Promise<CustomerPreference[]> {
    return this.service.customerPreferences(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CustomerPreference, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CustomerPreference",
    action: "read",
    possession: "own",
  })
  async customerPreference(
    @graphql.Args() args: CustomerPreferenceFindUniqueArgs
  ): Promise<CustomerPreference | null> {
    const result = await this.service.customerPreference(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CustomerPreference)
  @nestAccessControl.UseRoles({
    resource: "CustomerPreference",
    action: "create",
    possession: "any",
  })
  async createCustomerPreference(
    @graphql.Args() args: CreateCustomerPreferenceArgs
  ): Promise<CustomerPreference> {
    return await this.service.createCustomerPreference({
      ...args,
      data: {
        ...args.data,

        appUsers: {
          connect: args.data.appUsers,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CustomerPreference)
  @nestAccessControl.UseRoles({
    resource: "CustomerPreference",
    action: "update",
    possession: "any",
  })
  async updateCustomerPreference(
    @graphql.Args() args: UpdateCustomerPreferenceArgs
  ): Promise<CustomerPreference | null> {
    try {
      return await this.service.updateCustomerPreference({
        ...args,
        data: {
          ...args.data,

          appUsers: {
            connect: args.data.appUsers,
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

  @graphql.Mutation(() => CustomerPreference)
  @nestAccessControl.UseRoles({
    resource: "CustomerPreference",
    action: "delete",
    possession: "any",
  })
  async deleteCustomerPreference(
    @graphql.Args() args: DeleteCustomerPreferenceArgs
  ): Promise<CustomerPreference | null> {
    try {
      return await this.service.deleteCustomerPreference(args);
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
  @graphql.ResolveField(() => AppUser, {
    nullable: true,
    name: "appUsers",
  })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "read",
    possession: "any",
  })
  async getAppUsers(
    @graphql.Parent() parent: CustomerPreference
  ): Promise<AppUser | null> {
    const result = await this.service.getAppUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}