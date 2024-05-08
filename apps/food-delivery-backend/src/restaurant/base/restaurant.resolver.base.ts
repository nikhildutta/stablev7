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
import { Restaurant } from "./Restaurant";
import { RestaurantCountArgs } from "./RestaurantCountArgs";
import { RestaurantFindManyArgs } from "./RestaurantFindManyArgs";
import { RestaurantFindUniqueArgs } from "./RestaurantFindUniqueArgs";
import { CreateRestaurantArgs } from "./CreateRestaurantArgs";
import { UpdateRestaurantArgs } from "./UpdateRestaurantArgs";
import { DeleteRestaurantArgs } from "./DeleteRestaurantArgs";
import { AccountRestaurantLookupFindManyArgs } from "../../accountRestaurantLookup/base/AccountRestaurantLookupFindManyArgs";
import { AccountRestaurantLookup } from "../../accountRestaurantLookup/base/AccountRestaurantLookup";
import { ComboGroupFindManyArgs } from "../../comboGroup/base/ComboGroupFindManyArgs";
import { ComboGroup } from "../../comboGroup/base/ComboGroup";
import { FavouriteRestaurantFindManyArgs } from "../../favouriteRestaurant/base/FavouriteRestaurantFindManyArgs";
import { FavouriteRestaurant } from "../../favouriteRestaurant/base/FavouriteRestaurant";
import { MenuCategoryFindManyArgs } from "../../menuCategory/base/MenuCategoryFindManyArgs";
import { MenuCategory } from "../../menuCategory/base/MenuCategory";
import { MerchantInvoiceFindManyArgs } from "../../merchantInvoice/base/MerchantInvoiceFindManyArgs";
import { MerchantInvoice } from "../../merchantInvoice/base/MerchantInvoice";
import { OrderHistoryFindManyArgs } from "../../orderHistory/base/OrderHistoryFindManyArgs";
import { OrderHistory } from "../../orderHistory/base/OrderHistory";
import { OrderPackagingFeeFindManyArgs } from "../../orderPackagingFee/base/OrderPackagingFeeFindManyArgs";
import { OrderPackagingFee } from "../../orderPackagingFee/base/OrderPackagingFee";
import { PayoutCycleFindManyArgs } from "../../payoutCycle/base/PayoutCycleFindManyArgs";
import { PayoutCycle } from "../../payoutCycle/base/PayoutCycle";
import { PayoutInformationTableFindManyArgs } from "../../payoutInformationTable/base/PayoutInformationTableFindManyArgs";
import { PayoutInformationTable } from "../../payoutInformationTable/base/PayoutInformationTable";
import { PortalUsersRelationsLookupFindManyArgs } from "../../portalUsersRelationsLookup/base/PortalUsersRelationsLookupFindManyArgs";
import { PortalUsersRelationsLookup } from "../../portalUsersRelationsLookup/base/PortalUsersRelationsLookup";
import { ReservationFindManyArgs } from "../../reservation/base/ReservationFindManyArgs";
import { Reservation } from "../../reservation/base/Reservation";
import { RestaurantDetailFindManyArgs } from "../../restaurantDetail/base/RestaurantDetailFindManyArgs";
import { RestaurantDetail } from "../../restaurantDetail/base/RestaurantDetail";
import { RestaurantPreferenceFindManyArgs } from "../../restaurantPreference/base/RestaurantPreferenceFindManyArgs";
import { RestaurantPreference } from "../../restaurantPreference/base/RestaurantPreference";
import { RestaurantsHashtagsMapFindManyArgs } from "../../restaurantsHashtagsMap/base/RestaurantsHashtagsMapFindManyArgs";
import { RestaurantsHashtagsMap } from "../../restaurantsHashtagsMap/base/RestaurantsHashtagsMap";
import { RestaurantTimeWindowMapFindManyArgs } from "../../restaurantTimeWindowMap/base/RestaurantTimeWindowMapFindManyArgs";
import { RestaurantTimeWindowMap } from "../../restaurantTimeWindowMap/base/RestaurantTimeWindowMap";
import { TaxRateInformationFindManyArgs } from "../../taxRateInformation/base/TaxRateInformationFindManyArgs";
import { TaxRateInformation } from "../../taxRateInformation/base/TaxRateInformation";
import { RestaurantService } from "../restaurant.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Restaurant)
export class RestaurantResolverBase {
  constructor(
    protected readonly service: RestaurantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async _restaurantsMeta(
    @graphql.Args() args: RestaurantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Restaurant])
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async restaurants(
    @graphql.Args() args: RestaurantFindManyArgs
  ): Promise<Restaurant[]> {
    return this.service.restaurants(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Restaurant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "own",
  })
  async restaurant(
    @graphql.Args() args: RestaurantFindUniqueArgs
  ): Promise<Restaurant | null> {
    const result = await this.service.restaurant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Restaurant)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "create",
    possession: "any",
  })
  async createRestaurant(
    @graphql.Args() args: CreateRestaurantArgs
  ): Promise<Restaurant> {
    return await this.service.createRestaurant({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Restaurant)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  async updateRestaurant(
    @graphql.Args() args: UpdateRestaurantArgs
  ): Promise<Restaurant | null> {
    try {
      return await this.service.updateRestaurant({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Restaurant)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "delete",
    possession: "any",
  })
  async deleteRestaurant(
    @graphql.Args() args: DeleteRestaurantArgs
  ): Promise<Restaurant | null> {
    try {
      return await this.service.deleteRestaurant(args);
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
  @graphql.ResolveField(() => [AccountRestaurantLookup], {
    name: "accountRestaurantLookup",
  })
  @nestAccessControl.UseRoles({
    resource: "AccountRestaurantLookup",
    action: "read",
    possession: "any",
  })
  async findAccountRestaurantLookup(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: AccountRestaurantLookupFindManyArgs
  ): Promise<AccountRestaurantLookup[]> {
    const results = await this.service.findAccountRestaurantLookup(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ComboGroup], { name: "comboGroups" })
  @nestAccessControl.UseRoles({
    resource: "ComboGroup",
    action: "read",
    possession: "any",
  })
  async findComboGroups(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: ComboGroupFindManyArgs
  ): Promise<ComboGroup[]> {
    const results = await this.service.findComboGroups(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [FavouriteRestaurant], {
    name: "favouriteRestaurant",
  })
  @nestAccessControl.UseRoles({
    resource: "FavouriteRestaurant",
    action: "read",
    possession: "any",
  })
  async findFavouriteRestaurant(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: FavouriteRestaurantFindManyArgs
  ): Promise<FavouriteRestaurant[]> {
    const results = await this.service.findFavouriteRestaurant(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MenuCategory], { name: "menuCategories" })
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "read",
    possession: "any",
  })
  async findMenuCategories(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: MenuCategoryFindManyArgs
  ): Promise<MenuCategory[]> {
    const results = await this.service.findMenuCategories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MerchantInvoice], { name: "merchantInvoices" })
  @nestAccessControl.UseRoles({
    resource: "MerchantInvoice",
    action: "read",
    possession: "any",
  })
  async findMerchantInvoices(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: MerchantInvoiceFindManyArgs
  ): Promise<MerchantInvoice[]> {
    const results = await this.service.findMerchantInvoices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [OrderHistory], { name: "orderHistory" })
  @nestAccessControl.UseRoles({
    resource: "OrderHistory",
    action: "read",
    possession: "any",
  })
  async findOrderHistory(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: OrderHistoryFindManyArgs
  ): Promise<OrderHistory[]> {
    const results = await this.service.findOrderHistory(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [OrderPackagingFee], {
    name: "orderPackagingFee",
  })
  @nestAccessControl.UseRoles({
    resource: "OrderPackagingFee",
    action: "read",
    possession: "any",
  })
  async findOrderPackagingFee(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: OrderPackagingFeeFindManyArgs
  ): Promise<OrderPackagingFee[]> {
    const results = await this.service.findOrderPackagingFee(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PayoutCycle], { name: "payoutCycles" })
  @nestAccessControl.UseRoles({
    resource: "PayoutCycle",
    action: "read",
    possession: "any",
  })
  async findPayoutCycles(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: PayoutCycleFindManyArgs
  ): Promise<PayoutCycle[]> {
    const results = await this.service.findPayoutCycles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PayoutInformationTable], {
    name: "payoutInformationTable",
  })
  @nestAccessControl.UseRoles({
    resource: "PayoutInformationTable",
    action: "read",
    possession: "any",
  })
  async findPayoutInformationTable(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: PayoutInformationTableFindManyArgs
  ): Promise<PayoutInformationTable[]> {
    const results = await this.service.findPayoutInformationTable(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PortalUsersRelationsLookup], {
    name: "portalUsersRelationsLookup",
  })
  @nestAccessControl.UseRoles({
    resource: "PortalUsersRelationsLookup",
    action: "read",
    possession: "any",
  })
  async findPortalUsersRelationsLookup(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: PortalUsersRelationsLookupFindManyArgs
  ): Promise<PortalUsersRelationsLookup[]> {
    const results = await this.service.findPortalUsersRelationsLookup(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Reservation], { name: "reservations" })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async findReservations(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: ReservationFindManyArgs
  ): Promise<Reservation[]> {
    const results = await this.service.findReservations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [RestaurantDetail], { name: "restaurantDetails" })
  @nestAccessControl.UseRoles({
    resource: "RestaurantDetail",
    action: "read",
    possession: "any",
  })
  async findRestaurantDetails(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: RestaurantDetailFindManyArgs
  ): Promise<RestaurantDetail[]> {
    const results = await this.service.findRestaurantDetails(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [RestaurantPreference], {
    name: "restaurantPreferences",
  })
  @nestAccessControl.UseRoles({
    resource: "RestaurantPreference",
    action: "read",
    possession: "any",
  })
  async findRestaurantPreferences(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: RestaurantPreferenceFindManyArgs
  ): Promise<RestaurantPreference[]> {
    const results = await this.service.findRestaurantPreferences(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [RestaurantsHashtagsMap], {
    name: "restaurantsHashtagsMap",
  })
  @nestAccessControl.UseRoles({
    resource: "RestaurantsHashtagsMap",
    action: "read",
    possession: "any",
  })
  async findRestaurantsHashtagsMap(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: RestaurantsHashtagsMapFindManyArgs
  ): Promise<RestaurantsHashtagsMap[]> {
    const results = await this.service.findRestaurantsHashtagsMap(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [RestaurantTimeWindowMap], {
    name: "restaurantTimeWindowMap",
  })
  @nestAccessControl.UseRoles({
    resource: "RestaurantTimeWindowMap",
    action: "read",
    possession: "any",
  })
  async findRestaurantTimeWindowMap(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: RestaurantTimeWindowMapFindManyArgs
  ): Promise<RestaurantTimeWindowMap[]> {
    const results = await this.service.findRestaurantTimeWindowMap(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [TaxRateInformation], {
    name: "taxRateInformation",
  })
  @nestAccessControl.UseRoles({
    resource: "TaxRateInformation",
    action: "read",
    possession: "any",
  })
  async findTaxRateInformation(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: TaxRateInformationFindManyArgs
  ): Promise<TaxRateInformation[]> {
    const results = await this.service.findTaxRateInformation(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}