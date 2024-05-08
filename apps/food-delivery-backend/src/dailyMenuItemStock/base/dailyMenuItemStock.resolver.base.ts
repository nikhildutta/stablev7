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
import { DailyMenuItemStock } from "./DailyMenuItemStock";
import { DailyMenuItemStockCountArgs } from "./DailyMenuItemStockCountArgs";
import { DailyMenuItemStockFindManyArgs } from "./DailyMenuItemStockFindManyArgs";
import { DailyMenuItemStockFindUniqueArgs } from "./DailyMenuItemStockFindUniqueArgs";
import { CreateDailyMenuItemStockArgs } from "./CreateDailyMenuItemStockArgs";
import { UpdateDailyMenuItemStockArgs } from "./UpdateDailyMenuItemStockArgs";
import { DeleteDailyMenuItemStockArgs } from "./DeleteDailyMenuItemStockArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { DailyMenuItemStockService } from "../dailyMenuItemStock.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailyMenuItemStock)
export class DailyMenuItemStockResolverBase {
  constructor(
    protected readonly service: DailyMenuItemStockService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DailyMenuItemStock",
    action: "read",
    possession: "any",
  })
  async _dailyMenuItemStocksMeta(
    @graphql.Args() args: DailyMenuItemStockCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DailyMenuItemStock])
  @nestAccessControl.UseRoles({
    resource: "DailyMenuItemStock",
    action: "read",
    possession: "any",
  })
  async dailyMenuItemStocks(
    @graphql.Args() args: DailyMenuItemStockFindManyArgs
  ): Promise<DailyMenuItemStock[]> {
    return this.service.dailyMenuItemStocks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DailyMenuItemStock, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DailyMenuItemStock",
    action: "read",
    possession: "own",
  })
  async dailyMenuItemStock(
    @graphql.Args() args: DailyMenuItemStockFindUniqueArgs
  ): Promise<DailyMenuItemStock | null> {
    const result = await this.service.dailyMenuItemStock(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DailyMenuItemStock)
  @nestAccessControl.UseRoles({
    resource: "DailyMenuItemStock",
    action: "create",
    possession: "any",
  })
  async createDailyMenuItemStock(
    @graphql.Args() args: CreateDailyMenuItemStockArgs
  ): Promise<DailyMenuItemStock> {
    return await this.service.createDailyMenuItemStock({
      ...args,
      data: {
        ...args.data,

        menuItems: {
          connect: args.data.menuItems,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DailyMenuItemStock)
  @nestAccessControl.UseRoles({
    resource: "DailyMenuItemStock",
    action: "update",
    possession: "any",
  })
  async updateDailyMenuItemStock(
    @graphql.Args() args: UpdateDailyMenuItemStockArgs
  ): Promise<DailyMenuItemStock | null> {
    try {
      return await this.service.updateDailyMenuItemStock({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => DailyMenuItemStock)
  @nestAccessControl.UseRoles({
    resource: "DailyMenuItemStock",
    action: "delete",
    possession: "any",
  })
  async deleteDailyMenuItemStock(
    @graphql.Args() args: DeleteDailyMenuItemStockArgs
  ): Promise<DailyMenuItemStock | null> {
    try {
      return await this.service.deleteDailyMenuItemStock(args);
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
    @graphql.Parent() parent: DailyMenuItemStock
  ): Promise<MenuItem | null> {
    const result = await this.service.getMenuItems(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}