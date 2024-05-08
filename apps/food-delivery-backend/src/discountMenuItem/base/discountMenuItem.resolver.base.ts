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
import { DiscountMenuItem } from "./DiscountMenuItem";
import { DiscountMenuItemCountArgs } from "./DiscountMenuItemCountArgs";
import { DiscountMenuItemFindManyArgs } from "./DiscountMenuItemFindManyArgs";
import { DiscountMenuItemFindUniqueArgs } from "./DiscountMenuItemFindUniqueArgs";
import { CreateDiscountMenuItemArgs } from "./CreateDiscountMenuItemArgs";
import { UpdateDiscountMenuItemArgs } from "./UpdateDiscountMenuItemArgs";
import { DeleteDiscountMenuItemArgs } from "./DeleteDiscountMenuItemArgs";
import { Discount } from "../../discount/base/Discount";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { DiscountMenuItemService } from "../discountMenuItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiscountMenuItem)
export class DiscountMenuItemResolverBase {
  constructor(
    protected readonly service: DiscountMenuItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DiscountMenuItem",
    action: "read",
    possession: "any",
  })
  async _discountMenuItemsMeta(
    @graphql.Args() args: DiscountMenuItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DiscountMenuItem])
  @nestAccessControl.UseRoles({
    resource: "DiscountMenuItem",
    action: "read",
    possession: "any",
  })
  async discountMenuItems(
    @graphql.Args() args: DiscountMenuItemFindManyArgs
  ): Promise<DiscountMenuItem[]> {
    return this.service.discountMenuItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DiscountMenuItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DiscountMenuItem",
    action: "read",
    possession: "own",
  })
  async discountMenuItem(
    @graphql.Args() args: DiscountMenuItemFindUniqueArgs
  ): Promise<DiscountMenuItem | null> {
    const result = await this.service.discountMenuItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DiscountMenuItem)
  @nestAccessControl.UseRoles({
    resource: "DiscountMenuItem",
    action: "create",
    possession: "any",
  })
  async createDiscountMenuItem(
    @graphql.Args() args: CreateDiscountMenuItemArgs
  ): Promise<DiscountMenuItem> {
    return await this.service.createDiscountMenuItem({
      ...args,
      data: {
        ...args.data,

        discount: {
          connect: args.data.discount,
        },

        menuItems: {
          connect: args.data.menuItems,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DiscountMenuItem)
  @nestAccessControl.UseRoles({
    resource: "DiscountMenuItem",
    action: "update",
    possession: "any",
  })
  async updateDiscountMenuItem(
    @graphql.Args() args: UpdateDiscountMenuItemArgs
  ): Promise<DiscountMenuItem | null> {
    try {
      return await this.service.updateDiscountMenuItem({
        ...args,
        data: {
          ...args.data,

          discount: {
            connect: args.data.discount,
          },

          menuItems: {
            connect: args.data.menuItems,
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

  @graphql.Mutation(() => DiscountMenuItem)
  @nestAccessControl.UseRoles({
    resource: "DiscountMenuItem",
    action: "delete",
    possession: "any",
  })
  async deleteDiscountMenuItem(
    @graphql.Args() args: DeleteDiscountMenuItemArgs
  ): Promise<DiscountMenuItem | null> {
    try {
      return await this.service.deleteDiscountMenuItem(args);
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
  @graphql.ResolveField(() => Discount, {
    nullable: true,
    name: "discount",
  })
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "any",
  })
  async getDiscount(
    @graphql.Parent() parent: DiscountMenuItem
  ): Promise<Discount | null> {
    const result = await this.service.getDiscount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => MenuItem, {
    nullable: true,
    name: "menuItems",
  })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async getMenuItems(
    @graphql.Parent() parent: DiscountMenuItem
  ): Promise<MenuItem | null> {
    const result = await this.service.getMenuItems(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}