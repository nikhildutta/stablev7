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
import { CustomerAddressMapService } from "../customerAddressMap.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerAddressMapCreateInput } from "./CustomerAddressMapCreateInput";
import { CustomerAddressMap } from "./CustomerAddressMap";
import { CustomerAddressMapFindManyArgs } from "./CustomerAddressMapFindManyArgs";
import { CustomerAddressMapWhereUniqueInput } from "./CustomerAddressMapWhereUniqueInput";
import { CustomerAddressMapUpdateInput } from "./CustomerAddressMapUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerAddressMapControllerBase {
  constructor(
    protected readonly service: CustomerAddressMapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerAddressMap })
  @nestAccessControl.UseRoles({
    resource: "CustomerAddressMap",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCustomerAddressMap(
    @common.Body() data: CustomerAddressMapCreateInput
  ): Promise<CustomerAddressMap> {
    return await this.service.createCustomerAddressMap({
      data: {
        ...data,

        addresses: {
          connect: data.addresses,
        },

        customers: {
          connect: data.customers,
        },
      },
      select: {
        addresses: {
          select: {
            id: true,
          },
        },

        customers: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomerAddressMap] })
  @ApiNestedQuery(CustomerAddressMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CustomerAddressMap",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customerAddressMaps(
    @common.Req() request: Request
  ): Promise<CustomerAddressMap[]> {
    const args = plainToClass(CustomerAddressMapFindManyArgs, request.query);
    return this.service.customerAddressMaps({
      ...args,
      select: {
        addresses: {
          select: {
            id: true,
          },
        },

        customers: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomerAddressMap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerAddressMap",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customerAddressMap(
    @common.Param() params: CustomerAddressMapWhereUniqueInput
  ): Promise<CustomerAddressMap | null> {
    const result = await this.service.customerAddressMap({
      where: params,
      select: {
        addresses: {
          select: {
            id: true,
          },
        },

        customers: {
          select: {
            id: true,
          },
        },

        id: true,
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
  @swagger.ApiOkResponse({ type: CustomerAddressMap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerAddressMap",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCustomerAddressMap(
    @common.Param() params: CustomerAddressMapWhereUniqueInput,
    @common.Body() data: CustomerAddressMapUpdateInput
  ): Promise<CustomerAddressMap | null> {
    try {
      return await this.service.updateCustomerAddressMap({
        where: params,
        data: {
          ...data,

          addresses: {
            connect: data.addresses,
          },

          customers: {
            connect: data.customers,
          },
        },
        select: {
          addresses: {
            select: {
              id: true,
            },
          },

          customers: {
            select: {
              id: true,
            },
          },

          id: true,
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
  @swagger.ApiOkResponse({ type: CustomerAddressMap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerAddressMap",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCustomerAddressMap(
    @common.Param() params: CustomerAddressMapWhereUniqueInput
  ): Promise<CustomerAddressMap | null> {
    try {
      return await this.service.deleteCustomerAddressMap({
        where: params,
        select: {
          addresses: {
            select: {
              id: true,
            },
          },

          customers: {
            select: {
              id: true,
            },
          },

          id: true,
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
