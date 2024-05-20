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
import { FavouriteService } from "../favourite.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FavouriteCreateInput } from "./FavouriteCreateInput";
import { Favourite } from "./Favourite";
import { FavouriteFindManyArgs } from "./FavouriteFindManyArgs";
import { FavouriteWhereUniqueInput } from "./FavouriteWhereUniqueInput";
import { FavouriteUpdateInput } from "./FavouriteUpdateInput";
import { FavouriteMenuItemFindManyArgs } from "../../favouriteMenuItem/base/FavouriteMenuItemFindManyArgs";
import { FavouriteMenuItem } from "../../favouriteMenuItem/base/FavouriteMenuItem";
import { FavouriteMenuItemWhereUniqueInput } from "../../favouriteMenuItem/base/FavouriteMenuItemWhereUniqueInput";
import { FavouriteRestaurantFindManyArgs } from "../../favouriteRestaurant/base/FavouriteRestaurantFindManyArgs";
import { FavouriteRestaurant } from "../../favouriteRestaurant/base/FavouriteRestaurant";
import { FavouriteRestaurantWhereUniqueInput } from "../../favouriteRestaurant/base/FavouriteRestaurantWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FavouriteControllerBase {
  constructor(
    protected readonly service: FavouriteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Favourite })
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFavourite(
    @common.Body() data: FavouriteCreateInput
  ): Promise<Favourite> {
    return await this.service.createFavourite({
      data: {
        ...data,

        appUsers: {
          connect: data.appUsers,
        },
      },
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Favourite] })
  @ApiNestedQuery(FavouriteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async favourites(@common.Req() request: Request): Promise<Favourite[]> {
    const args = plainToClass(FavouriteFindManyArgs, request.query);
    return this.service.favourites({
      ...args,
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Favourite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async favourite(
    @common.Param() params: FavouriteWhereUniqueInput
  ): Promise<Favourite | null> {
    const result = await this.service.favourite({
      where: params,
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Favourite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFavourite(
    @common.Param() params: FavouriteWhereUniqueInput,
    @common.Body() data: FavouriteUpdateInput
  ): Promise<Favourite | null> {
    try {
      return await this.service.updateFavourite({
        where: params,
        data: {
          ...data,

          appUsers: {
            connect: data.appUsers,
          },
        },
        select: {
          appUsers: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Favourite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFavourite(
    @common.Param() params: FavouriteWhereUniqueInput
  ): Promise<Favourite | null> {
    try {
      return await this.service.deleteFavourite({
        where: params,
        select: {
          appUsers: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
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
  @common.Get("/:id/favouriteMenuItems")
  @ApiNestedQuery(FavouriteMenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FavouriteMenuItem",
    action: "read",
    possession: "any",
  })
  async findFavouriteMenuItems(
    @common.Req() request: Request,
    @common.Param() params: FavouriteWhereUniqueInput
  ): Promise<FavouriteMenuItem[]> {
    const query = plainToClass(FavouriteMenuItemFindManyArgs, request.query);
    const results = await this.service.findFavouriteMenuItems(params.id, {
      ...query,
      select: {
        createdAt: true,

        favourites: {
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
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/favouriteMenuItems")
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "update",
    possession: "any",
  })
  async connectFavouriteMenuItems(
    @common.Param() params: FavouriteWhereUniqueInput,
    @common.Body() body: FavouriteMenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favouriteMenuItems: {
        connect: body,
      },
    };
    await this.service.updateFavourite({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/favouriteMenuItems")
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "update",
    possession: "any",
  })
  async updateFavouriteMenuItems(
    @common.Param() params: FavouriteWhereUniqueInput,
    @common.Body() body: FavouriteMenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favouriteMenuItems: {
        set: body,
      },
    };
    await this.service.updateFavourite({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/favouriteMenuItems")
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "update",
    possession: "any",
  })
  async disconnectFavouriteMenuItems(
    @common.Param() params: FavouriteWhereUniqueInput,
    @common.Body() body: FavouriteMenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favouriteMenuItems: {
        disconnect: body,
      },
    };
    await this.service.updateFavourite({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/favouriteRestaurant")
  @ApiNestedQuery(FavouriteRestaurantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FavouriteRestaurant",
    action: "read",
    possession: "any",
  })
  async findFavouriteRestaurant(
    @common.Req() request: Request,
    @common.Param() params: FavouriteWhereUniqueInput
  ): Promise<FavouriteRestaurant[]> {
    const query = plainToClass(FavouriteRestaurantFindManyArgs, request.query);
    const results = await this.service.findFavouriteRestaurant(params.id, {
      ...query,
      select: {
        createdAt: true,

        favourites: {
          select: {
            id: true,
          },
        },

        id: true,

        restaurants: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/favouriteRestaurant")
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "update",
    possession: "any",
  })
  async connectFavouriteRestaurant(
    @common.Param() params: FavouriteWhereUniqueInput,
    @common.Body() body: FavouriteRestaurantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favouriteRestaurant: {
        connect: body,
      },
    };
    await this.service.updateFavourite({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/favouriteRestaurant")
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "update",
    possession: "any",
  })
  async updateFavouriteRestaurant(
    @common.Param() params: FavouriteWhereUniqueInput,
    @common.Body() body: FavouriteRestaurantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favouriteRestaurant: {
        set: body,
      },
    };
    await this.service.updateFavourite({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/favouriteRestaurant")
  @nestAccessControl.UseRoles({
    resource: "Favourite",
    action: "update",
    possession: "any",
  })
  async disconnectFavouriteRestaurant(
    @common.Param() params: FavouriteWhereUniqueInput,
    @common.Body() body: FavouriteRestaurantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      favouriteRestaurant: {
        disconnect: body,
      },
    };
    await this.service.updateFavourite({
      where: params,
      data,
      select: { id: true },
    });
  }
}
