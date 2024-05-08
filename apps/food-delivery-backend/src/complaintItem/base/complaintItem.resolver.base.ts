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
import { ComplaintItem } from "./ComplaintItem";
import { ComplaintItemCountArgs } from "./ComplaintItemCountArgs";
import { ComplaintItemFindManyArgs } from "./ComplaintItemFindManyArgs";
import { ComplaintItemFindUniqueArgs } from "./ComplaintItemFindUniqueArgs";
import { CreateComplaintItemArgs } from "./CreateComplaintItemArgs";
import { UpdateComplaintItemArgs } from "./UpdateComplaintItemArgs";
import { DeleteComplaintItemArgs } from "./DeleteComplaintItemArgs";
import { ComplaintsBook } from "../../complaintsBook/base/ComplaintsBook";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { ComplaintItemService } from "../complaintItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComplaintItem)
export class ComplaintItemResolverBase {
  constructor(
    protected readonly service: ComplaintItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "read",
    possession: "any",
  })
  async _complaintItemsMeta(
    @graphql.Args() args: ComplaintItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ComplaintItem])
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "read",
    possession: "any",
  })
  async complaintItems(
    @graphql.Args() args: ComplaintItemFindManyArgs
  ): Promise<ComplaintItem[]> {
    return this.service.complaintItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ComplaintItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "read",
    possession: "own",
  })
  async complaintItem(
    @graphql.Args() args: ComplaintItemFindUniqueArgs
  ): Promise<ComplaintItem | null> {
    const result = await this.service.complaintItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ComplaintItem)
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "create",
    possession: "any",
  })
  async createComplaintItem(
    @graphql.Args() args: CreateComplaintItemArgs
  ): Promise<ComplaintItem> {
    return await this.service.createComplaintItem({
      ...args,
      data: {
        ...args.data,

        complaintsBook: {
          connect: args.data.complaintsBook,
        },

        orderItems: {
          connect: args.data.orderItems,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ComplaintItem)
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "update",
    possession: "any",
  })
  async updateComplaintItem(
    @graphql.Args() args: UpdateComplaintItemArgs
  ): Promise<ComplaintItem | null> {
    try {
      return await this.service.updateComplaintItem({
        ...args,
        data: {
          ...args.data,

          complaintsBook: {
            connect: args.data.complaintsBook,
          },

          orderItems: {
            connect: args.data.orderItems,
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

  @graphql.Mutation(() => ComplaintItem)
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "delete",
    possession: "any",
  })
  async deleteComplaintItem(
    @graphql.Args() args: DeleteComplaintItemArgs
  ): Promise<ComplaintItem | null> {
    try {
      return await this.service.deleteComplaintItem(args);
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
  @graphql.ResolveField(() => ComplaintsBook, {
    nullable: true,
    name: "complaintsBook",
  })
  @nestAccessControl.UseRoles({
    resource: "ComplaintsBook",
    action: "read",
    possession: "any",
  })
  async getComplaintsBook(
    @graphql.Parent() parent: ComplaintItem
  ): Promise<ComplaintsBook | null> {
    const result = await this.service.getComplaintsBook(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => OrderItem, {
    nullable: true,
    name: "orderItems",
  })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async getOrderItems(
    @graphql.Parent() parent: ComplaintItem
  ): Promise<OrderItem | null> {
    const result = await this.service.getOrderItems(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}