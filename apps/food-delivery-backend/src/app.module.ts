import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AccessLogModule } from "./accessLog/accessLog.module";
import { AccountRestaurantLookupModule } from "./accountRestaurantLookup/accountRestaurantLookup.module";
import { AccountModule } from "./account/account.module";
import { AccountsAddressMapModule } from "./accountsAddressMap/accountsAddressMap.module";
import { AddressModule } from "./address/address.module";
import { AppUserModule } from "./appUser/appUser.module";
import { AuditLogModule } from "./auditLog/auditLog.module";
import { ComboGroupModule } from "./comboGroup/comboGroup.module";
import { ComboItemTableModule } from "./comboItemTable/comboItemTable.module";
import { ComboItemWindowMapModule } from "./comboItemWindowMap/comboItemWindowMap.module";
import { ComplaintItemModule } from "./complaintItem/complaintItem.module";
import { ComplaintsBookModule } from "./complaintsBook/complaintsBook.module";
import { ComplaintsPhotoModule } from "./complaintsPhoto/complaintsPhoto.module";
import { ContactDetailModule } from "./contactDetail/contactDetail.module";
import { ContactHashtagsMapModule } from "./contactHashtagsMap/contactHashtagsMap.module";
import { CouponRedemptionModule } from "./couponRedemption/couponRedemption.module";
import { CouponModule } from "./coupon/coupon.module";
import { CustomerAddressMapModule } from "./customerAddressMap/customerAddressMap.module";
import { CustomerPreferenceModule } from "./customerPreference/customerPreference.module";
import { CustomerSubscriptionModule } from "./customerSubscription/customerSubscription.module";
import { CustomerModule } from "./customer/customer.module";
import { DailyMenuItemStockModule } from "./dailyMenuItemStock/dailyMenuItemStock.module";
import { DeliveryInstructionAddressMapModule } from "./deliveryInstructionAddressMap/deliveryInstructionAddressMap.module";
import { DeliveryPartnerInstructionModule } from "./deliveryPartnerInstruction/deliveryPartnerInstruction.module";
import { DiscountModule } from "./discount/discount.module";
import { DiscountMenuItemModule } from "./discountMenuItem/discountMenuItem.module";
import { DiscountTypeModule } from "./discountType/discountType.module";
import { DiscountWindowMapModule } from "./discountWindowMap/discountWindowMap.module";
import { ErrorLogModule } from "./errorLog/errorLog.module";
import { FavouriteMenuItemModule } from "./favouriteMenuItem/favouriteMenuItem.module";
import { FavouriteRestaurantModule } from "./favouriteRestaurant/favouriteRestaurant.module";
import { FavouriteModule } from "./favourite/favourite.module";
import { FulfillmentBookModule } from "./fulfillmentBook/fulfillmentBook.module";
import { GeoLocationModule } from "./geoLocation/geoLocation.module";
import { GeofenceModule } from "./geofence/geofence.module";
import { HashtagModule } from "./hashtag/hashtag.module";
import { ItemPackagingFeeModule } from "./itemPackagingFee/itemPackagingFee.module";
import { MenuCategoryModule } from "./menuCategory/menuCategory.module";
import { MenuItemIngredientModule } from "./menuItemIngredient/menuItemIngredient.module";
import { MenuItemOptionModule } from "./menuItemOption/menuItemOption.module";
import { MenuItemModule } from "./menuItem/menuItem.module";
import { MenuItemsHashtagsMapModule } from "./menuItemsHashtagsMap/menuItemsHashtagsMap.module";
import { MenuItemsOptionsGroupModule } from "./menuItemsOptionsGroup/menuItemsOptionsGroup.module";
import { MenuItemsWindowMapModule } from "./menuItemsWindowMap/menuItemsWindowMap.module";
import { MenuSubCategoryModule } from "./menuSubCategory/menuSubCategory.module";
import { MerchantInvoiceModule } from "./merchantInvoice/merchantInvoice.module";
import { NotificationSettingModule } from "./notificationSetting/notificationSetting.module";
import { NotificationModule } from "./notification/notification.module";
import { OptionsAddOnsItemModule } from "./optionsAddOnsItem/optionsAddOnsItem.module";
import { OptionsAddonsGroupModule } from "./optionsAddonsGroup/optionsAddonsGroup.module";
import { OptionsVarientsGroupModule } from "./optionsVarientsGroup/optionsVarientsGroup.module";
import { OptionsVarientsItemModule } from "./optionsVarientsItem/optionsVarientsItem.module";
import { OrderHistoryModule } from "./orderHistory/orderHistory.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { OrderItemsAddonModule } from "./orderItemsAddon/orderItemsAddon.module";
import { OrderItemsRatingModule } from "./orderItemsRating/orderItemsRating.module";
import { OrderPackagingFeeModule } from "./orderPackagingFee/orderPackagingFee.module";
import { OrdersHashtagsMapModule } from "./ordersHashtagsMap/ordersHashtagsMap.module";
import { PaymentMethodModule } from "./paymentMethod/paymentMethod.module";
import { PaymentsBookModule } from "./paymentsBook/paymentsBook.module";
import { PayoutCycleModule } from "./payoutCycle/payoutCycle.module";
import { PayoutInformationTableModule } from "./payoutInformationTable/payoutInformationTable.module";
import { PortalUserModule } from "./portalUser/portalUser.module";
import { PortalUsersRelationsLookupModule } from "./portalUsersRelationsLookup/portalUsersRelationsLookup.module";
import { RatingModule } from "./rating/rating.module";
import { ReportModule } from "./report/report.module";
import { ReservationModule } from "./reservation/reservation.module";
import { RestaurantDetailModule } from "./restaurantDetail/restaurantDetail.module";
import { RestaurantPreferenceModule } from "./restaurantPreference/restaurantPreference.module";
import { RestaurantTimeWindowMapModule } from "./restaurantTimeWindowMap/restaurantTimeWindowMap.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { RestaurantsHashtagsMapModule } from "./restaurantsHashtagsMap/restaurantsHashtagsMap.module";
import { ReviewModule } from "./review/review.module";
import { RewardModule } from "./reward/reward.module";
import { SettlementsBreakupModule } from "./settlementsBreakup/settlementsBreakup.module";
import { SsoLookupModule } from "./ssoLookup/ssoLookup.module";
import { SubscriptionPlanModule } from "./subscriptionPlan/subscriptionPlan.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { TaxRateInformationModule } from "./taxRateInformation/taxRateInformation.module";
import { TimeWindowModule } from "./timeWindow/timeWindow.module";
import { UserCustomerLookupModule } from "./userCustomerLookup/userCustomerLookup.module";
import { UserFeedbackModule } from "./userFeedback/userFeedback.module";
import { UsersHashtagsMapModule } from "./usersHashtagsMap/usersHashtagsMap.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    AccessLogModule,
    AccountRestaurantLookupModule,
    AccountModule,
    AccountsAddressMapModule,
    AddressModule,
    AppUserModule,
    AuditLogModule,
    ComboGroupModule,
    ComboItemTableModule,
    ComboItemWindowMapModule,
    ComplaintItemModule,
    ComplaintsBookModule,
    ComplaintsPhotoModule,
    ContactDetailModule,
    ContactHashtagsMapModule,
    CouponRedemptionModule,
    CouponModule,
    CustomerAddressMapModule,
    CustomerPreferenceModule,
    CustomerSubscriptionModule,
    CustomerModule,
    DailyMenuItemStockModule,
    DeliveryInstructionAddressMapModule,
    DeliveryPartnerInstructionModule,
    DiscountModule,
    DiscountMenuItemModule,
    DiscountTypeModule,
    DiscountWindowMapModule,
    ErrorLogModule,
    FavouriteMenuItemModule,
    FavouriteRestaurantModule,
    FavouriteModule,
    FulfillmentBookModule,
    GeoLocationModule,
    GeofenceModule,
    HashtagModule,
    ItemPackagingFeeModule,
    MenuCategoryModule,
    MenuItemIngredientModule,
    MenuItemOptionModule,
    MenuItemModule,
    MenuItemsHashtagsMapModule,
    MenuItemsOptionsGroupModule,
    MenuItemsWindowMapModule,
    MenuSubCategoryModule,
    MerchantInvoiceModule,
    NotificationSettingModule,
    NotificationModule,
    OptionsAddOnsItemModule,
    OptionsAddonsGroupModule,
    OptionsVarientsGroupModule,
    OptionsVarientsItemModule,
    OrderHistoryModule,
    OrderItemModule,
    OrderItemsAddonModule,
    OrderItemsRatingModule,
    OrderPackagingFeeModule,
    OrdersHashtagsMapModule,
    PaymentMethodModule,
    PaymentsBookModule,
    PayoutCycleModule,
    PayoutInformationTableModule,
    PortalUserModule,
    PortalUsersRelationsLookupModule,
    RatingModule,
    ReportModule,
    ReservationModule,
    RestaurantDetailModule,
    RestaurantPreferenceModule,
    RestaurantTimeWindowMapModule,
    RestaurantModule,
    RestaurantsHashtagsMapModule,
    ReviewModule,
    RewardModule,
    SettlementsBreakupModule,
    SsoLookupModule,
    SubscriptionPlanModule,
    SubscriptionModule,
    TaxRateInformationModule,
    TimeWindowModule,
    UserCustomerLookupModule,
    UserFeedbackModule,
    UsersHashtagsMapModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
