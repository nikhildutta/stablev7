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
import { CustomerService } from "../customer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { Customer } from "./Customer";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { CustomerAddressMapFindManyArgs } from "../../customerAddressMap/base/CustomerAddressMapFindManyArgs";
import { CustomerAddressMap } from "../../customerAddressMap/base/CustomerAddressMap";
import { CustomerAddressMapWhereUniqueInput } from "../../customerAddressMap/base/CustomerAddressMapWhereUniqueInput";
import { UserCustomerLookupFindManyArgs } from "../../userCustomerLookup/base/UserCustomerLookupFindManyArgs";
import { UserCustomerLookup } from "../../userCustomerLookup/base/UserCustomerLookup";
import { UserCustomerLookupWhereUniqueInput } from "../../userCustomerLookup/base/UserCustomerLookupWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerControllerBase {
  constructor(
    protected readonly service: CustomerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCustomer(
    @common.Body() data: CustomerCreateInput
  ): Promise<Customer> {
    return await this.service.createCustomer({
      data: data,
      select: {
        additionaldetails: true,
        anniversary: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        gender: true,
        id: true,
        isEmailVerified: true,
        isMobileVerified: true,
        mobile: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customers(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.customers({
      ...args,
      select: {
        additionaldetails: true,
        anniversary: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        gender: true,
        id: true,
        isEmailVerified: true,
        isMobileVerified: true,
        mobile: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.customer({
      where: params,
      select: {
        additionaldetails: true,
        anniversary: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        gender: true,
        id: true,
        isEmailVerified: true,
        isMobileVerified: true,
        mobile: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCustomer(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        where: params,
        data: data,
        select: {
          additionaldetails: true,
          anniversary: true,
          createdAt: true,
          dateOfBirth: true,
          email: true,
          gender: true,
          id: true,
          isEmailVerified: true,
          isMobileVerified: true,
          mobile: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCustomer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer({
        where: params,
        select: {
          additionaldetails: true,
          anniversary: true,
          createdAt: true,
          dateOfBirth: true,
          email: true,
          gender: true,
          id: true,
          isEmailVerified: true,
          isMobileVerified: true,
          mobile: true,
          name: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/customerAddressMap")
  @ApiNestedQuery(CustomerAddressMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CustomerAddressMap",
    action: "read",
    possession: "any",
  })
  async findCustomerAddressMap(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<CustomerAddressMap[]> {
    const query = plainToClass(CustomerAddressMapFindManyArgs, request.query);
    const results = await this.service.findCustomerAddressMap(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customerAddressMap")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectCustomerAddressMap(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CustomerAddressMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customerAddressMap: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customerAddressMap")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateCustomerAddressMap(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CustomerAddressMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customerAddressMap: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customerAddressMap")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectCustomerAddressMap(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: CustomerAddressMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customerAddressMap: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/userCustomerLookup")
  @ApiNestedQuery(UserCustomerLookupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserCustomerLookup",
    action: "read",
    possession: "any",
  })
  async findUserCustomerLookup(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<UserCustomerLookup[]> {
    const query = plainToClass(UserCustomerLookupFindManyArgs, request.query);
    const results = await this.service.findUserCustomerLookup(params.id, {
      ...query,
      select: {
        appUsers: {
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userCustomerLookup")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectUserCustomerLookup(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: UserCustomerLookupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userCustomerLookup: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userCustomerLookup")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateUserCustomerLookup(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: UserCustomerLookupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userCustomerLookup: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userCustomerLookup")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectUserCustomerLookup(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: UserCustomerLookupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userCustomerLookup: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }
}