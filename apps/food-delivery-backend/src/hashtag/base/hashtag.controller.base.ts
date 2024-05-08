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
import { HashtagService } from "../hashtag.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HashtagCreateInput } from "./HashtagCreateInput";
import { Hashtag } from "./Hashtag";
import { HashtagFindManyArgs } from "./HashtagFindManyArgs";
import { HashtagWhereUniqueInput } from "./HashtagWhereUniqueInput";
import { HashtagUpdateInput } from "./HashtagUpdateInput";
import { ContactHashtagsMapFindManyArgs } from "../../contactHashtagsMap/base/ContactHashtagsMapFindManyArgs";
import { ContactHashtagsMap } from "../../contactHashtagsMap/base/ContactHashtagsMap";
import { ContactHashtagsMapWhereUniqueInput } from "../../contactHashtagsMap/base/ContactHashtagsMapWhereUniqueInput";
import { MenuItemsHashtagsMapFindManyArgs } from "../../menuItemsHashtagsMap/base/MenuItemsHashtagsMapFindManyArgs";
import { MenuItemsHashtagsMap } from "../../menuItemsHashtagsMap/base/MenuItemsHashtagsMap";
import { MenuItemsHashtagsMapWhereUniqueInput } from "../../menuItemsHashtagsMap/base/MenuItemsHashtagsMapWhereUniqueInput";
import { OrdersHashtagsMapFindManyArgs } from "../../ordersHashtagsMap/base/OrdersHashtagsMapFindManyArgs";
import { OrdersHashtagsMap } from "../../ordersHashtagsMap/base/OrdersHashtagsMap";
import { OrdersHashtagsMapWhereUniqueInput } from "../../ordersHashtagsMap/base/OrdersHashtagsMapWhereUniqueInput";
import { RestaurantsHashtagsMapFindManyArgs } from "../../restaurantsHashtagsMap/base/RestaurantsHashtagsMapFindManyArgs";
import { RestaurantsHashtagsMap } from "../../restaurantsHashtagsMap/base/RestaurantsHashtagsMap";
import { RestaurantsHashtagsMapWhereUniqueInput } from "../../restaurantsHashtagsMap/base/RestaurantsHashtagsMapWhereUniqueInput";
import { UsersHashtagsMapFindManyArgs } from "../../usersHashtagsMap/base/UsersHashtagsMapFindManyArgs";
import { UsersHashtagsMap } from "../../usersHashtagsMap/base/UsersHashtagsMap";
import { UsersHashtagsMapWhereUniqueInput } from "../../usersHashtagsMap/base/UsersHashtagsMapWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HashtagControllerBase {
  constructor(
    protected readonly service: HashtagService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hashtag })
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHashtag(
    @common.Body() data: HashtagCreateInput
  ): Promise<Hashtag> {
    return await this.service.createHashtag({
      data: data,
      select: {
        createdAt: true,
        hashText: true,
        id: true,
        tag: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Hashtag] })
  @ApiNestedQuery(HashtagFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hashtags(@common.Req() request: Request): Promise<Hashtag[]> {
    const args = plainToClass(HashtagFindManyArgs, request.query);
    return this.service.hashtags({
      ...args,
      select: {
        createdAt: true,
        hashText: true,
        id: true,
        tag: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hashtag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hashtag(
    @common.Param() params: HashtagWhereUniqueInput
  ): Promise<Hashtag | null> {
    const result = await this.service.hashtag({
      where: params,
      select: {
        createdAt: true,
        hashText: true,
        id: true,
        tag: true,
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
  @swagger.ApiOkResponse({ type: Hashtag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHashtag(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() data: HashtagUpdateInput
  ): Promise<Hashtag | null> {
    try {
      return await this.service.updateHashtag({
        where: params,
        data: data,
        select: {
          createdAt: true,
          hashText: true,
          id: true,
          tag: true,
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
  @swagger.ApiOkResponse({ type: Hashtag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHashtag(
    @common.Param() params: HashtagWhereUniqueInput
  ): Promise<Hashtag | null> {
    try {
      return await this.service.deleteHashtag({
        where: params,
        select: {
          createdAt: true,
          hashText: true,
          id: true,
          tag: true,
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
  @common.Get("/:id/contactHashtagsMap")
  @ApiNestedQuery(ContactHashtagsMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ContactHashtagsMap",
    action: "read",
    possession: "any",
  })
  async findContactHashtagsMap(
    @common.Req() request: Request,
    @common.Param() params: HashtagWhereUniqueInput
  ): Promise<ContactHashtagsMap[]> {
    const query = plainToClass(ContactHashtagsMapFindManyArgs, request.query);
    const results = await this.service.findContactHashtagsMap(params.id, {
      ...query,
      select: {
        contactDetails: {
          select: {
            id: true,
          },
        },

        hashtags: {
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

  @common.Post("/:id/contactHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async connectContactHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: ContactHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contactHashtagsMap: {
        connect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contactHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async updateContactHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: ContactHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contactHashtagsMap: {
        set: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contactHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async disconnectContactHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: ContactHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contactHashtagsMap: {
        disconnect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/menuItemsHashtagsMap")
  @ApiNestedQuery(MenuItemsHashtagsMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItemsHashtagsMap",
    action: "read",
    possession: "any",
  })
  async findMenuItemsHashtagsMap(
    @common.Req() request: Request,
    @common.Param() params: HashtagWhereUniqueInput
  ): Promise<MenuItemsHashtagsMap[]> {
    const query = plainToClass(MenuItemsHashtagsMapFindManyArgs, request.query);
    const results = await this.service.findMenuItemsHashtagsMap(params.id, {
      ...query,
      select: {
        hashtags: {
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

  @common.Post("/:id/menuItemsHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async connectMenuItemsHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: MenuItemsHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsHashtagsMap: {
        connect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menuItemsHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async updateMenuItemsHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: MenuItemsHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsHashtagsMap: {
        set: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menuItemsHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItemsHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: MenuItemsHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsHashtagsMap: {
        disconnect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/ordersHashtagsMap")
  @ApiNestedQuery(OrdersHashtagsMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrdersHashtagsMap",
    action: "read",
    possession: "any",
  })
  async findOrdersHashtagsMap(
    @common.Req() request: Request,
    @common.Param() params: HashtagWhereUniqueInput
  ): Promise<OrdersHashtagsMap[]> {
    const query = plainToClass(OrdersHashtagsMapFindManyArgs, request.query);
    const results = await this.service.findOrdersHashtagsMap(params.id, {
      ...query,
      select: {
        hashtags: {
          select: {
            id: true,
          },
        },

        id: true,

        orderHistory: {
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

  @common.Post("/:id/ordersHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async connectOrdersHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: OrdersHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ordersHashtagsMap: {
        connect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ordersHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async updateOrdersHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: OrdersHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ordersHashtagsMap: {
        set: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ordersHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async disconnectOrdersHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: OrdersHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ordersHashtagsMap: {
        disconnect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/restaurantsHashtagsMap")
  @ApiNestedQuery(RestaurantsHashtagsMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RestaurantsHashtagsMap",
    action: "read",
    possession: "any",
  })
  async findRestaurantsHashtagsMap(
    @common.Req() request: Request,
    @common.Param() params: HashtagWhereUniqueInput
  ): Promise<RestaurantsHashtagsMap[]> {
    const query = plainToClass(
      RestaurantsHashtagsMapFindManyArgs,
      request.query
    );
    const results = await this.service.findRestaurantsHashtagsMap(params.id, {
      ...query,
      select: {
        hashtags: {
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

  @common.Post("/:id/restaurantsHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async connectRestaurantsHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: RestaurantsHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      restaurantsHashtagsMap: {
        connect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/restaurantsHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async updateRestaurantsHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: RestaurantsHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      restaurantsHashtagsMap: {
        set: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/restaurantsHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async disconnectRestaurantsHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: RestaurantsHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      restaurantsHashtagsMap: {
        disconnect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/usersHashtagsMap")
  @ApiNestedQuery(UsersHashtagsMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UsersHashtagsMap",
    action: "read",
    possession: "any",
  })
  async findUsersHashtagsMap(
    @common.Req() request: Request,
    @common.Param() params: HashtagWhereUniqueInput
  ): Promise<UsersHashtagsMap[]> {
    const query = plainToClass(UsersHashtagsMapFindManyArgs, request.query);
    const results = await this.service.findUsersHashtagsMap(params.id, {
      ...query,
      select: {
        appUsers: {
          select: {
            id: true,
          },
        },

        hashtags: {
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

  @common.Post("/:id/usersHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async connectUsersHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: UsersHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersHashtagsMap: {
        connect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/usersHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async updateUsersHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: UsersHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersHashtagsMap: {
        set: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/usersHashtagsMap")
  @nestAccessControl.UseRoles({
    resource: "Hashtag",
    action: "update",
    possession: "any",
  })
  async disconnectUsersHashtagsMap(
    @common.Param() params: HashtagWhereUniqueInput,
    @common.Body() body: UsersHashtagsMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersHashtagsMap: {
        disconnect: body,
      },
    };
    await this.service.updateHashtag({
      where: params,
      data,
      select: { id: true },
    });
  }
}