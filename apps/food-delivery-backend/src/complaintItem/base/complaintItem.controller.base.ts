/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ComplaintItemService } from "../complaintItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ComplaintItemCreateInput } from "./ComplaintItemCreateInput";
import { ComplaintItem } from "./ComplaintItem";
import { ComplaintItemFindManyArgs } from "./ComplaintItemFindManyArgs";
import { ComplaintItemWhereUniqueInput } from "./ComplaintItemWhereUniqueInput";
import { ComplaintItemUpdateInput } from "./ComplaintItemUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ComplaintItemControllerBase {
  constructor(
    protected readonly service: ComplaintItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ComplaintItem })
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createComplaintItem(
    @common.Body() data: ComplaintItemCreateInput
  ): Promise<ComplaintItem> {
    return await this.service.createComplaintItem({
      data: {
        ...data,

        complaintsBook: {
          connect: data.complaintsBook,
        },

        orderItems: {
          connect: data.orderItems,
        },
      },
      select: {
        complaintsBook: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isRefund: true,

        orderItems: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ComplaintItem] })
  @ApiNestedQuery(ComplaintItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async complaintItems(
    @common.Req() request: Request
  ): Promise<ComplaintItem[]> {
    const args = plainToClass(ComplaintItemFindManyArgs, request.query);
    return this.service.complaintItems({
      ...args,
      select: {
        complaintsBook: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isRefund: true,

        orderItems: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ComplaintItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async complaintItem(
    @common.Param() params: ComplaintItemWhereUniqueInput
  ): Promise<ComplaintItem | null> {
    const result = await this.service.complaintItem({
      where: params,
      select: {
        complaintsBook: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isRefund: true,

        orderItems: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ComplaintItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateComplaintItem(
    @common.Param() params: ComplaintItemWhereUniqueInput,
    @common.Body() data: ComplaintItemUpdateInput
  ): Promise<ComplaintItem | null> {
    try {
      return await this.service.updateComplaintItem({
        where: params,
        data: {
          ...data,

          complaintsBook: {
            connect: data.complaintsBook,
          },

          orderItems: {
            connect: data.orderItems,
          },
        },
        select: {
          complaintsBook: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isRefund: true,

          orderItems: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ComplaintItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteComplaintItem(
    @common.Param() params: ComplaintItemWhereUniqueInput
  ): Promise<ComplaintItem | null> {
    try {
      return await this.service.deleteComplaintItem({
        where: params,
        select: {
          complaintsBook: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isRefund: true,

          orderItems: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}