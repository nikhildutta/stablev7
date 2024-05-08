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
import { DiscountService } from "../discount.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DiscountCreateInput } from "./DiscountCreateInput";
import { Discount } from "./Discount";
import { DiscountFindManyArgs } from "./DiscountFindManyArgs";
import { DiscountWhereUniqueInput } from "./DiscountWhereUniqueInput";
import { DiscountUpdateInput } from "./DiscountUpdateInput";
import { CouponFindManyArgs } from "../../coupon/base/CouponFindManyArgs";
import { Coupon } from "../../coupon/base/Coupon";
import { CouponWhereUniqueInput } from "../../coupon/base/CouponWhereUniqueInput";
import { DiscountMenuItemFindManyArgs } from "../../discountMenuItem/base/DiscountMenuItemFindManyArgs";
import { DiscountMenuItem } from "../../discountMenuItem/base/DiscountMenuItem";
import { DiscountMenuItemWhereUniqueInput } from "../../discountMenuItem/base/DiscountMenuItemWhereUniqueInput";
import { DiscountWindowMapFindManyArgs } from "../../discountWindowMap/base/DiscountWindowMapFindManyArgs";
import { DiscountWindowMap } from "../../discountWindowMap/base/DiscountWindowMap";
import { DiscountWindowMapWhereUniqueInput } from "../../discountWindowMap/base/DiscountWindowMapWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DiscountControllerBase {
  constructor(
    protected readonly service: DiscountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Discount })
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDiscount(
    @common.Body() data: DiscountCreateInput
  ): Promise<Discount> {
    return await this.service.createDiscount({
      data: {
        ...data,

        discountType: {
          connect: data.discountType,
        },
      },
      select: {
        createdAt: true,

        discountType: {
          select: {
            id: true,
          },
        },

        expirationDate: true,
        id: true,
        isActive: true,
        maxDiscount: true,
        minimumOrderValue: true,
        typeOfDiscount: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Discount] })
  @ApiNestedQuery(DiscountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async discounts(@common.Req() request: Request): Promise<Discount[]> {
    const args = plainToClass(DiscountFindManyArgs, request.query);
    return this.service.discounts({
      ...args,
      select: {
        createdAt: true,

        discountType: {
          select: {
            id: true,
          },
        },

        expirationDate: true,
        id: true,
        isActive: true,
        maxDiscount: true,
        minimumOrderValue: true,
        typeOfDiscount: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async discount(
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Discount | null> {
    const result = await this.service.discount({
      where: params,
      select: {
        createdAt: true,

        discountType: {
          select: {
            id: true,
          },
        },

        expirationDate: true,
        id: true,
        isActive: true,
        maxDiscount: true,
        minimumOrderValue: true,
        typeOfDiscount: true,
        updatedAt: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDiscount(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() data: DiscountUpdateInput
  ): Promise<Discount | null> {
    try {
      return await this.service.updateDiscount({
        where: params,
        data: {
          ...data,

          discountType: {
            connect: data.discountType,
          },
        },
        select: {
          createdAt: true,

          discountType: {
            select: {
              id: true,
            },
          },

          expirationDate: true,
          id: true,
          isActive: true,
          maxDiscount: true,
          minimumOrderValue: true,
          typeOfDiscount: true,
          updatedAt: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDiscount(
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Discount | null> {
    try {
      return await this.service.deleteDiscount({
        where: params,
        select: {
          createdAt: true,

          discountType: {
            select: {
              id: true,
            },
          },

          expirationDate: true,
          id: true,
          isActive: true,
          maxDiscount: true,
          minimumOrderValue: true,
          typeOfDiscount: true,
          updatedAt: true,
          value: true,
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
  @common.Get("/:id/coupons")
  @ApiNestedQuery(CouponFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Coupon",
    action: "read",
    possession: "any",
  })
  async findCoupons(
    @common.Req() request: Request,
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Coupon[]> {
    const query = plainToClass(CouponFindManyArgs, request.query);
    const results = await this.service.findCoupons(params.id, {
      ...query,
      select: {
        code: true,
        createdAt: true,

        discount: {
          select: {
            id: true,
          },
        },

        expirationDate: true,
        id: true,
        isActive: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/coupons")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async connectCoupons(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: CouponWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      coupons: {
        connect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/coupons")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async updateCoupons(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: CouponWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      coupons: {
        set: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/coupons")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async disconnectCoupons(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: CouponWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      coupons: {
        disconnect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/discountMenuItem")
  @ApiNestedQuery(DiscountMenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DiscountMenuItem",
    action: "read",
    possession: "any",
  })
  async findDiscountMenuItem(
    @common.Req() request: Request,
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<DiscountMenuItem[]> {
    const query = plainToClass(DiscountMenuItemFindManyArgs, request.query);
    const results = await this.service.findDiscountMenuItem(params.id, {
      ...query,
      select: {
        createdAt: true,

        discount: {
          select: {
            id: true,
          },
        },

        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/discountMenuItem")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async connectDiscountMenuItem(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: DiscountMenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discountMenuItem: {
        connect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/discountMenuItem")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async updateDiscountMenuItem(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: DiscountMenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discountMenuItem: {
        set: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/discountMenuItem")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async disconnectDiscountMenuItem(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: DiscountMenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discountMenuItem: {
        disconnect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/discountWindowMap")
  @ApiNestedQuery(DiscountWindowMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DiscountWindowMap",
    action: "read",
    possession: "any",
  })
  async findDiscountWindowMap(
    @common.Req() request: Request,
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<DiscountWindowMap[]> {
    const query = plainToClass(DiscountWindowMapFindManyArgs, request.query);
    const results = await this.service.findDiscountWindowMap(params.id, {
      ...query,
      select: {
        createdAt: true,

        discount: {
          select: {
            id: true,
          },
        },

        id: true,
        is247: true,

        timeWindow: {
          select: {
            id: true,
          },
        },

        time_window_day: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/discountWindowMap")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async connectDiscountWindowMap(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: DiscountWindowMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discountWindowMap: {
        connect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/discountWindowMap")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async updateDiscountWindowMap(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: DiscountWindowMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discountWindowMap: {
        set: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/discountWindowMap")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  async disconnectDiscountWindowMap(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: DiscountWindowMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discountWindowMap: {
        disconnect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }
}