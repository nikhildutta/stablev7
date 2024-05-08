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
import { MenuCategory } from "./MenuCategory";
import { MenuCategoryCountArgs } from "./MenuCategoryCountArgs";
import { MenuCategoryFindManyArgs } from "./MenuCategoryFindManyArgs";
import { MenuCategoryFindUniqueArgs } from "./MenuCategoryFindUniqueArgs";
import { CreateMenuCategoryArgs } from "./CreateMenuCategoryArgs";
import { UpdateMenuCategoryArgs } from "./UpdateMenuCategoryArgs";
import { DeleteMenuCategoryArgs } from "./DeleteMenuCategoryArgs";
import { MenuSubCategoryFindManyArgs } from "../../menuSubCategory/base/MenuSubCategoryFindManyArgs";
import { MenuSubCategory } from "../../menuSubCategory/base/MenuSubCategory";
import { Restaurant } from "../../restaurant/base/Restaurant";
import { MenuCategoryService } from "../menuCategory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuCategory)
export class MenuCategoryResolverBase {
  constructor(
    protected readonly service: MenuCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "read",
    possession: "any",
  })
  async _menuCategoriesMeta(
    @graphql.Args() args: MenuCategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MenuCategory])
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "read",
    possession: "any",
  })
  async menuCategories(
    @graphql.Args() args: MenuCategoryFindManyArgs
  ): Promise<MenuCategory[]> {
    return this.service.menuCategories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MenuCategory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "read",
    possession: "own",
  })
  async menuCategory(
    @graphql.Args() args: MenuCategoryFindUniqueArgs
  ): Promise<MenuCategory | null> {
    const result = await this.service.menuCategory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MenuCategory)
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "create",
    possession: "any",
  })
  async createMenuCategory(
    @graphql.Args() args: CreateMenuCategoryArgs
  ): Promise<MenuCategory> {
    return await this.service.createMenuCategory({
      ...args,
      data: {
        ...args.data,

        restaurants: {
          connect: args.data.restaurants,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MenuCategory)
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "update",
    possession: "any",
  })
  async updateMenuCategory(
    @graphql.Args() args: UpdateMenuCategoryArgs
  ): Promise<MenuCategory | null> {
    try {
      return await this.service.updateMenuCategory({
        ...args,
        data: {
          ...args.data,

          restaurants: {
            connect: args.data.restaurants,
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

  @graphql.Mutation(() => MenuCategory)
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "delete",
    possession: "any",
  })
  async deleteMenuCategory(
    @graphql.Args() args: DeleteMenuCategoryArgs
  ): Promise<MenuCategory | null> {
    try {
      return await this.service.deleteMenuCategory(args);
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
  @graphql.ResolveField(() => [MenuSubCategory], { name: "menuSubCategories" })
  @nestAccessControl.UseRoles({
    resource: "MenuSubCategory",
    action: "read",
    possession: "any",
  })
  async findMenuSubCategories(
    @graphql.Parent() parent: MenuCategory,
    @graphql.Args() args: MenuSubCategoryFindManyArgs
  ): Promise<MenuSubCategory[]> {
    const results = await this.service.findMenuSubCategories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Restaurant, {
    nullable: true,
    name: "restaurants",
  })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async getRestaurants(
    @graphql.Parent() parent: MenuCategory
  ): Promise<Restaurant | null> {
    const result = await this.service.getRestaurants(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}