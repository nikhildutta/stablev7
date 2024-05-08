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
import { DiscountWindowMap } from "./DiscountWindowMap";
import { DiscountWindowMapCountArgs } from "./DiscountWindowMapCountArgs";
import { DiscountWindowMapFindManyArgs } from "./DiscountWindowMapFindManyArgs";
import { DiscountWindowMapFindUniqueArgs } from "./DiscountWindowMapFindUniqueArgs";
import { CreateDiscountWindowMapArgs } from "./CreateDiscountWindowMapArgs";
import { UpdateDiscountWindowMapArgs } from "./UpdateDiscountWindowMapArgs";
import { DeleteDiscountWindowMapArgs } from "./DeleteDiscountWindowMapArgs";
import { Discount } from "../../discount/base/Discount";
import { TimeWindow } from "../../timeWindow/base/TimeWindow";
import { DiscountWindowMapService } from "../discountWindowMap.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiscountWindowMap)
export class DiscountWindowMapResolverBase {
  constructor(
    protected readonly service: DiscountWindowMapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DiscountWindowMap",
    action: "read",
    possession: "any",
  })
  async _discountWindowMapsMeta(
    @graphql.Args() args: DiscountWindowMapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DiscountWindowMap])
  @nestAccessControl.UseRoles({
    resource: "DiscountWindowMap",
    action: "read",
    possession: "any",
  })
  async discountWindowMaps(
    @graphql.Args() args: DiscountWindowMapFindManyArgs
  ): Promise<DiscountWindowMap[]> {
    return this.service.discountWindowMaps(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DiscountWindowMap, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DiscountWindowMap",
    action: "read",
    possession: "own",
  })
  async discountWindowMap(
    @graphql.Args() args: DiscountWindowMapFindUniqueArgs
  ): Promise<DiscountWindowMap | null> {
    const result = await this.service.discountWindowMap(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DiscountWindowMap)
  @nestAccessControl.UseRoles({
    resource: "DiscountWindowMap",
    action: "create",
    possession: "any",
  })
  async createDiscountWindowMap(
    @graphql.Args() args: CreateDiscountWindowMapArgs
  ): Promise<DiscountWindowMap> {
    return await this.service.createDiscountWindowMap({
      ...args,
      data: {
        ...args.data,

        discount: {
          connect: args.data.discount,
        },

        timeWindow: {
          connect: args.data.timeWindow,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DiscountWindowMap)
  @nestAccessControl.UseRoles({
    resource: "DiscountWindowMap",
    action: "update",
    possession: "any",
  })
  async updateDiscountWindowMap(
    @graphql.Args() args: UpdateDiscountWindowMapArgs
  ): Promise<DiscountWindowMap | null> {
    try {
      return await this.service.updateDiscountWindowMap({
        ...args,
        data: {
          ...args.data,

          discount: {
            connect: args.data.discount,
          },

          timeWindow: {
            connect: args.data.timeWindow,
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

  @graphql.Mutation(() => DiscountWindowMap)
  @nestAccessControl.UseRoles({
    resource: "DiscountWindowMap",
    action: "delete",
    possession: "any",
  })
  async deleteDiscountWindowMap(
    @graphql.Args() args: DeleteDiscountWindowMapArgs
  ): Promise<DiscountWindowMap | null> {
    try {
      return await this.service.deleteDiscountWindowMap(args);
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
    @graphql.Parent() parent: DiscountWindowMap
  ): Promise<Discount | null> {
    const result = await this.service.getDiscount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => TimeWindow, {
    nullable: true,
    name: "timeWindow",
  })
  @nestAccessControl.UseRoles({
    resource: "TimeWindow",
    action: "read",
    possession: "any",
  })
  async getTimeWindow(
    @graphql.Parent() parent: DiscountWindowMap
  ): Promise<TimeWindow | null> {
    const result = await this.service.getTimeWindow(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
