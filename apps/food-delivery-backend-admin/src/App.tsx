import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AccessLogList } from "./accessLog/AccessLogList";
import { AccessLogCreate } from "./accessLog/AccessLogCreate";
import { AccessLogEdit } from "./accessLog/AccessLogEdit";
import { AccessLogShow } from "./accessLog/AccessLogShow";
import { AccountRestaurantLookupList } from "./accountRestaurantLookup/AccountRestaurantLookupList";
import { AccountRestaurantLookupCreate } from "./accountRestaurantLookup/AccountRestaurantLookupCreate";
import { AccountRestaurantLookupEdit } from "./accountRestaurantLookup/AccountRestaurantLookupEdit";
import { AccountRestaurantLookupShow } from "./accountRestaurantLookup/AccountRestaurantLookupShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { AccountsAddressMapList } from "./accountsAddressMap/AccountsAddressMapList";
import { AccountsAddressMapCreate } from "./accountsAddressMap/AccountsAddressMapCreate";
import { AccountsAddressMapEdit } from "./accountsAddressMap/AccountsAddressMapEdit";
import { AccountsAddressMapShow } from "./accountsAddressMap/AccountsAddressMapShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { ComboGroupList } from "./comboGroup/ComboGroupList";
import { ComboGroupCreate } from "./comboGroup/ComboGroupCreate";
import { ComboGroupEdit } from "./comboGroup/ComboGroupEdit";
import { ComboGroupShow } from "./comboGroup/ComboGroupShow";
import { ComboItemTableList } from "./comboItemTable/ComboItemTableList";
import { ComboItemTableCreate } from "./comboItemTable/ComboItemTableCreate";
import { ComboItemTableEdit } from "./comboItemTable/ComboItemTableEdit";
import { ComboItemTableShow } from "./comboItemTable/ComboItemTableShow";
import { ComboItemWindowMapList } from "./comboItemWindowMap/ComboItemWindowMapList";
import { ComboItemWindowMapCreate } from "./comboItemWindowMap/ComboItemWindowMapCreate";
import { ComboItemWindowMapEdit } from "./comboItemWindowMap/ComboItemWindowMapEdit";
import { ComboItemWindowMapShow } from "./comboItemWindowMap/ComboItemWindowMapShow";
import { ComplaintItemList } from "./complaintItem/ComplaintItemList";
import { ComplaintItemCreate } from "./complaintItem/ComplaintItemCreate";
import { ComplaintItemEdit } from "./complaintItem/ComplaintItemEdit";
import { ComplaintItemShow } from "./complaintItem/ComplaintItemShow";
import { ComplaintsBookList } from "./complaintsBook/ComplaintsBookList";
import { ComplaintsBookCreate } from "./complaintsBook/ComplaintsBookCreate";
import { ComplaintsBookEdit } from "./complaintsBook/ComplaintsBookEdit";
import { ComplaintsBookShow } from "./complaintsBook/ComplaintsBookShow";
import { ComplaintsPhotoList } from "./complaintsPhoto/ComplaintsPhotoList";
import { ComplaintsPhotoCreate } from "./complaintsPhoto/ComplaintsPhotoCreate";
import { ComplaintsPhotoEdit } from "./complaintsPhoto/ComplaintsPhotoEdit";
import { ComplaintsPhotoShow } from "./complaintsPhoto/ComplaintsPhotoShow";
import { ContactDetailList } from "./contactDetail/ContactDetailList";
import { ContactDetailCreate } from "./contactDetail/ContactDetailCreate";
import { ContactDetailEdit } from "./contactDetail/ContactDetailEdit";
import { ContactDetailShow } from "./contactDetail/ContactDetailShow";
import { ContactHashtagsMapList } from "./contactHashtagsMap/ContactHashtagsMapList";
import { ContactHashtagsMapCreate } from "./contactHashtagsMap/ContactHashtagsMapCreate";
import { ContactHashtagsMapEdit } from "./contactHashtagsMap/ContactHashtagsMapEdit";
import { ContactHashtagsMapShow } from "./contactHashtagsMap/ContactHashtagsMapShow";
import { CouponRedemptionList } from "./couponRedemption/CouponRedemptionList";
import { CouponRedemptionCreate } from "./couponRedemption/CouponRedemptionCreate";
import { CouponRedemptionEdit } from "./couponRedemption/CouponRedemptionEdit";
import { CouponRedemptionShow } from "./couponRedemption/CouponRedemptionShow";
import { CouponList } from "./coupon/CouponList";
import { CouponCreate } from "./coupon/CouponCreate";
import { CouponEdit } from "./coupon/CouponEdit";
import { CouponShow } from "./coupon/CouponShow";
import { CustomerAddressMapList } from "./customerAddressMap/CustomerAddressMapList";
import { CustomerAddressMapCreate } from "./customerAddressMap/CustomerAddressMapCreate";
import { CustomerAddressMapEdit } from "./customerAddressMap/CustomerAddressMapEdit";
import { CustomerAddressMapShow } from "./customerAddressMap/CustomerAddressMapShow";
import { CustomerPreferenceList } from "./customerPreference/CustomerPreferenceList";
import { CustomerPreferenceCreate } from "./customerPreference/CustomerPreferenceCreate";
import { CustomerPreferenceEdit } from "./customerPreference/CustomerPreferenceEdit";
import { CustomerPreferenceShow } from "./customerPreference/CustomerPreferenceShow";
import { CustomerSubscriptionList } from "./customerSubscription/CustomerSubscriptionList";
import { CustomerSubscriptionCreate } from "./customerSubscription/CustomerSubscriptionCreate";
import { CustomerSubscriptionEdit } from "./customerSubscription/CustomerSubscriptionEdit";
import { CustomerSubscriptionShow } from "./customerSubscription/CustomerSubscriptionShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { DailyMenuItemStockList } from "./dailyMenuItemStock/DailyMenuItemStockList";
import { DailyMenuItemStockCreate } from "./dailyMenuItemStock/DailyMenuItemStockCreate";
import { DailyMenuItemStockEdit } from "./dailyMenuItemStock/DailyMenuItemStockEdit";
import { DailyMenuItemStockShow } from "./dailyMenuItemStock/DailyMenuItemStockShow";
import { DeliveryInstructionAddressMapList } from "./deliveryInstructionAddressMap/DeliveryInstructionAddressMapList";
import { DeliveryInstructionAddressMapCreate } from "./deliveryInstructionAddressMap/DeliveryInstructionAddressMapCreate";
import { DeliveryInstructionAddressMapEdit } from "./deliveryInstructionAddressMap/DeliveryInstructionAddressMapEdit";
import { DeliveryInstructionAddressMapShow } from "./deliveryInstructionAddressMap/DeliveryInstructionAddressMapShow";
import { DeliveryPartnerInstructionList } from "./deliveryPartnerInstruction/DeliveryPartnerInstructionList";
import { DeliveryPartnerInstructionCreate } from "./deliveryPartnerInstruction/DeliveryPartnerInstructionCreate";
import { DeliveryPartnerInstructionEdit } from "./deliveryPartnerInstruction/DeliveryPartnerInstructionEdit";
import { DeliveryPartnerInstructionShow } from "./deliveryPartnerInstruction/DeliveryPartnerInstructionShow";
import { DiscountList } from "./discount/DiscountList";
import { DiscountCreate } from "./discount/DiscountCreate";
import { DiscountEdit } from "./discount/DiscountEdit";
import { DiscountShow } from "./discount/DiscountShow";
import { DiscountMenuItemList } from "./discountMenuItem/DiscountMenuItemList";
import { DiscountMenuItemCreate } from "./discountMenuItem/DiscountMenuItemCreate";
import { DiscountMenuItemEdit } from "./discountMenuItem/DiscountMenuItemEdit";
import { DiscountMenuItemShow } from "./discountMenuItem/DiscountMenuItemShow";
import { DiscountTypeList } from "./discountType/DiscountTypeList";
import { DiscountTypeCreate } from "./discountType/DiscountTypeCreate";
import { DiscountTypeEdit } from "./discountType/DiscountTypeEdit";
import { DiscountTypeShow } from "./discountType/DiscountTypeShow";
import { DiscountWindowMapList } from "./discountWindowMap/DiscountWindowMapList";
import { DiscountWindowMapCreate } from "./discountWindowMap/DiscountWindowMapCreate";
import { DiscountWindowMapEdit } from "./discountWindowMap/DiscountWindowMapEdit";
import { DiscountWindowMapShow } from "./discountWindowMap/DiscountWindowMapShow";
import { ErrorLogList } from "./errorLog/ErrorLogList";
import { ErrorLogCreate } from "./errorLog/ErrorLogCreate";
import { ErrorLogEdit } from "./errorLog/ErrorLogEdit";
import { ErrorLogShow } from "./errorLog/ErrorLogShow";
import { FavouriteMenuItemList } from "./favouriteMenuItem/FavouriteMenuItemList";
import { FavouriteMenuItemCreate } from "./favouriteMenuItem/FavouriteMenuItemCreate";
import { FavouriteMenuItemEdit } from "./favouriteMenuItem/FavouriteMenuItemEdit";
import { FavouriteMenuItemShow } from "./favouriteMenuItem/FavouriteMenuItemShow";
import { FavouriteRestaurantList } from "./favouriteRestaurant/FavouriteRestaurantList";
import { FavouriteRestaurantCreate } from "./favouriteRestaurant/FavouriteRestaurantCreate";
import { FavouriteRestaurantEdit } from "./favouriteRestaurant/FavouriteRestaurantEdit";
import { FavouriteRestaurantShow } from "./favouriteRestaurant/FavouriteRestaurantShow";
import { FavouriteList } from "./favourite/FavouriteList";
import { FavouriteCreate } from "./favourite/FavouriteCreate";
import { FavouriteEdit } from "./favourite/FavouriteEdit";
import { FavouriteShow } from "./favourite/FavouriteShow";
import { FulfillmentBookList } from "./fulfillmentBook/FulfillmentBookList";
import { FulfillmentBookCreate } from "./fulfillmentBook/FulfillmentBookCreate";
import { FulfillmentBookEdit } from "./fulfillmentBook/FulfillmentBookEdit";
import { FulfillmentBookShow } from "./fulfillmentBook/FulfillmentBookShow";
import { GeoLocationList } from "./geoLocation/GeoLocationList";
import { GeoLocationCreate } from "./geoLocation/GeoLocationCreate";
import { GeoLocationEdit } from "./geoLocation/GeoLocationEdit";
import { GeoLocationShow } from "./geoLocation/GeoLocationShow";
import { GeofenceList } from "./geofence/GeofenceList";
import { GeofenceCreate } from "./geofence/GeofenceCreate";
import { GeofenceEdit } from "./geofence/GeofenceEdit";
import { GeofenceShow } from "./geofence/GeofenceShow";
import { HashtagList } from "./hashtag/HashtagList";
import { HashtagCreate } from "./hashtag/HashtagCreate";
import { HashtagEdit } from "./hashtag/HashtagEdit";
import { HashtagShow } from "./hashtag/HashtagShow";
import { ItemPackagingFeeList } from "./itemPackagingFee/ItemPackagingFeeList";
import { ItemPackagingFeeCreate } from "./itemPackagingFee/ItemPackagingFeeCreate";
import { ItemPackagingFeeEdit } from "./itemPackagingFee/ItemPackagingFeeEdit";
import { ItemPackagingFeeShow } from "./itemPackagingFee/ItemPackagingFeeShow";
import { MenuCategoryList } from "./menuCategory/MenuCategoryList";
import { MenuCategoryCreate } from "./menuCategory/MenuCategoryCreate";
import { MenuCategoryEdit } from "./menuCategory/MenuCategoryEdit";
import { MenuCategoryShow } from "./menuCategory/MenuCategoryShow";
import { MenuItemIngredientList } from "./menuItemIngredient/MenuItemIngredientList";
import { MenuItemIngredientCreate } from "./menuItemIngredient/MenuItemIngredientCreate";
import { MenuItemIngredientEdit } from "./menuItemIngredient/MenuItemIngredientEdit";
import { MenuItemIngredientShow } from "./menuItemIngredient/MenuItemIngredientShow";
import { MenuItemOptionList } from "./menuItemOption/MenuItemOptionList";
import { MenuItemOptionCreate } from "./menuItemOption/MenuItemOptionCreate";
import { MenuItemOptionEdit } from "./menuItemOption/MenuItemOptionEdit";
import { MenuItemOptionShow } from "./menuItemOption/MenuItemOptionShow";
import { MenuItemList } from "./menuItem/MenuItemList";
import { MenuItemCreate } from "./menuItem/MenuItemCreate";
import { MenuItemEdit } from "./menuItem/MenuItemEdit";
import { MenuItemShow } from "./menuItem/MenuItemShow";
import { MenuItemsHashtagsMapList } from "./menuItemsHashtagsMap/MenuItemsHashtagsMapList";
import { MenuItemsHashtagsMapCreate } from "./menuItemsHashtagsMap/MenuItemsHashtagsMapCreate";
import { MenuItemsHashtagsMapEdit } from "./menuItemsHashtagsMap/MenuItemsHashtagsMapEdit";
import { MenuItemsHashtagsMapShow } from "./menuItemsHashtagsMap/MenuItemsHashtagsMapShow";
import { MenuItemsOptionsGroupList } from "./menuItemsOptionsGroup/MenuItemsOptionsGroupList";
import { MenuItemsOptionsGroupCreate } from "./menuItemsOptionsGroup/MenuItemsOptionsGroupCreate";
import { MenuItemsOptionsGroupEdit } from "./menuItemsOptionsGroup/MenuItemsOptionsGroupEdit";
import { MenuItemsOptionsGroupShow } from "./menuItemsOptionsGroup/MenuItemsOptionsGroupShow";
import { MenuItemsWindowMapList } from "./menuItemsWindowMap/MenuItemsWindowMapList";
import { MenuItemsWindowMapCreate } from "./menuItemsWindowMap/MenuItemsWindowMapCreate";
import { MenuItemsWindowMapEdit } from "./menuItemsWindowMap/MenuItemsWindowMapEdit";
import { MenuItemsWindowMapShow } from "./menuItemsWindowMap/MenuItemsWindowMapShow";
import { MenuSubCategoryList } from "./menuSubCategory/MenuSubCategoryList";
import { MenuSubCategoryCreate } from "./menuSubCategory/MenuSubCategoryCreate";
import { MenuSubCategoryEdit } from "./menuSubCategory/MenuSubCategoryEdit";
import { MenuSubCategoryShow } from "./menuSubCategory/MenuSubCategoryShow";
import { MerchantInvoiceList } from "./merchantInvoice/MerchantInvoiceList";
import { MerchantInvoiceCreate } from "./merchantInvoice/MerchantInvoiceCreate";
import { MerchantInvoiceEdit } from "./merchantInvoice/MerchantInvoiceEdit";
import { MerchantInvoiceShow } from "./merchantInvoice/MerchantInvoiceShow";
import { NotificationSettingList } from "./notificationSetting/NotificationSettingList";
import { NotificationSettingCreate } from "./notificationSetting/NotificationSettingCreate";
import { NotificationSettingEdit } from "./notificationSetting/NotificationSettingEdit";
import { NotificationSettingShow } from "./notificationSetting/NotificationSettingShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { OptionsAddOnsItemList } from "./optionsAddOnsItem/OptionsAddOnsItemList";
import { OptionsAddOnsItemCreate } from "./optionsAddOnsItem/OptionsAddOnsItemCreate";
import { OptionsAddOnsItemEdit } from "./optionsAddOnsItem/OptionsAddOnsItemEdit";
import { OptionsAddOnsItemShow } from "./optionsAddOnsItem/OptionsAddOnsItemShow";
import { OptionsAddonsGroupList } from "./optionsAddonsGroup/OptionsAddonsGroupList";
import { OptionsAddonsGroupCreate } from "./optionsAddonsGroup/OptionsAddonsGroupCreate";
import { OptionsAddonsGroupEdit } from "./optionsAddonsGroup/OptionsAddonsGroupEdit";
import { OptionsAddonsGroupShow } from "./optionsAddonsGroup/OptionsAddonsGroupShow";
import { OptionsVarientsGroupList } from "./optionsVarientsGroup/OptionsVarientsGroupList";
import { OptionsVarientsGroupCreate } from "./optionsVarientsGroup/OptionsVarientsGroupCreate";
import { OptionsVarientsGroupEdit } from "./optionsVarientsGroup/OptionsVarientsGroupEdit";
import { OptionsVarientsGroupShow } from "./optionsVarientsGroup/OptionsVarientsGroupShow";
import { OptionsVarientsItemList } from "./optionsVarientsItem/OptionsVarientsItemList";
import { OptionsVarientsItemCreate } from "./optionsVarientsItem/OptionsVarientsItemCreate";
import { OptionsVarientsItemEdit } from "./optionsVarientsItem/OptionsVarientsItemEdit";
import { OptionsVarientsItemShow } from "./optionsVarientsItem/OptionsVarientsItemShow";
import { OrderHistoryList } from "./orderHistory/OrderHistoryList";
import { OrderHistoryCreate } from "./orderHistory/OrderHistoryCreate";
import { OrderHistoryEdit } from "./orderHistory/OrderHistoryEdit";
import { OrderHistoryShow } from "./orderHistory/OrderHistoryShow";
import { OrderItemList } from "./orderItem/OrderItemList";
import { OrderItemCreate } from "./orderItem/OrderItemCreate";
import { OrderItemEdit } from "./orderItem/OrderItemEdit";
import { OrderItemShow } from "./orderItem/OrderItemShow";
import { OrderItemsAddonList } from "./orderItemsAddon/OrderItemsAddonList";
import { OrderItemsAddonCreate } from "./orderItemsAddon/OrderItemsAddonCreate";
import { OrderItemsAddonEdit } from "./orderItemsAddon/OrderItemsAddonEdit";
import { OrderItemsAddonShow } from "./orderItemsAddon/OrderItemsAddonShow";
import { OrderItemsRatingList } from "./orderItemsRating/OrderItemsRatingList";
import { OrderItemsRatingCreate } from "./orderItemsRating/OrderItemsRatingCreate";
import { OrderItemsRatingEdit } from "./orderItemsRating/OrderItemsRatingEdit";
import { OrderItemsRatingShow } from "./orderItemsRating/OrderItemsRatingShow";
import { OrderPackagingFeeList } from "./orderPackagingFee/OrderPackagingFeeList";
import { OrderPackagingFeeCreate } from "./orderPackagingFee/OrderPackagingFeeCreate";
import { OrderPackagingFeeEdit } from "./orderPackagingFee/OrderPackagingFeeEdit";
import { OrderPackagingFeeShow } from "./orderPackagingFee/OrderPackagingFeeShow";
import { OrdersHashtagsMapList } from "./ordersHashtagsMap/OrdersHashtagsMapList";
import { OrdersHashtagsMapCreate } from "./ordersHashtagsMap/OrdersHashtagsMapCreate";
import { OrdersHashtagsMapEdit } from "./ordersHashtagsMap/OrdersHashtagsMapEdit";
import { OrdersHashtagsMapShow } from "./ordersHashtagsMap/OrdersHashtagsMapShow";
import { PaymentMethodList } from "./paymentMethod/PaymentMethodList";
import { PaymentMethodCreate } from "./paymentMethod/PaymentMethodCreate";
import { PaymentMethodEdit } from "./paymentMethod/PaymentMethodEdit";
import { PaymentMethodShow } from "./paymentMethod/PaymentMethodShow";
import { PaymentsBookList } from "./paymentsBook/PaymentsBookList";
import { PaymentsBookCreate } from "./paymentsBook/PaymentsBookCreate";
import { PaymentsBookEdit } from "./paymentsBook/PaymentsBookEdit";
import { PaymentsBookShow } from "./paymentsBook/PaymentsBookShow";
import { PayoutCycleList } from "./payoutCycle/PayoutCycleList";
import { PayoutCycleCreate } from "./payoutCycle/PayoutCycleCreate";
import { PayoutCycleEdit } from "./payoutCycle/PayoutCycleEdit";
import { PayoutCycleShow } from "./payoutCycle/PayoutCycleShow";
import { PayoutInformationTableList } from "./payoutInformationTable/PayoutInformationTableList";
import { PayoutInformationTableCreate } from "./payoutInformationTable/PayoutInformationTableCreate";
import { PayoutInformationTableEdit } from "./payoutInformationTable/PayoutInformationTableEdit";
import { PayoutInformationTableShow } from "./payoutInformationTable/PayoutInformationTableShow";
import { PortalUserList } from "./portalUser/PortalUserList";
import { PortalUserCreate } from "./portalUser/PortalUserCreate";
import { PortalUserEdit } from "./portalUser/PortalUserEdit";
import { PortalUserShow } from "./portalUser/PortalUserShow";
import { PortalUsersRelationsLookupList } from "./portalUsersRelationsLookup/PortalUsersRelationsLookupList";
import { PortalUsersRelationsLookupCreate } from "./portalUsersRelationsLookup/PortalUsersRelationsLookupCreate";
import { PortalUsersRelationsLookupEdit } from "./portalUsersRelationsLookup/PortalUsersRelationsLookupEdit";
import { PortalUsersRelationsLookupShow } from "./portalUsersRelationsLookup/PortalUsersRelationsLookupShow";
import { RatingList } from "./rating/RatingList";
import { RatingCreate } from "./rating/RatingCreate";
import { RatingEdit } from "./rating/RatingEdit";
import { RatingShow } from "./rating/RatingShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { RestaurantDetailList } from "./restaurantDetail/RestaurantDetailList";
import { RestaurantDetailCreate } from "./restaurantDetail/RestaurantDetailCreate";
import { RestaurantDetailEdit } from "./restaurantDetail/RestaurantDetailEdit";
import { RestaurantDetailShow } from "./restaurantDetail/RestaurantDetailShow";
import { RestaurantPreferenceList } from "./restaurantPreference/RestaurantPreferenceList";
import { RestaurantPreferenceCreate } from "./restaurantPreference/RestaurantPreferenceCreate";
import { RestaurantPreferenceEdit } from "./restaurantPreference/RestaurantPreferenceEdit";
import { RestaurantPreferenceShow } from "./restaurantPreference/RestaurantPreferenceShow";
import { RestaurantTimeWindowMapList } from "./restaurantTimeWindowMap/RestaurantTimeWindowMapList";
import { RestaurantTimeWindowMapCreate } from "./restaurantTimeWindowMap/RestaurantTimeWindowMapCreate";
import { RestaurantTimeWindowMapEdit } from "./restaurantTimeWindowMap/RestaurantTimeWindowMapEdit";
import { RestaurantTimeWindowMapShow } from "./restaurantTimeWindowMap/RestaurantTimeWindowMapShow";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { RestaurantsHashtagsMapList } from "./restaurantsHashtagsMap/RestaurantsHashtagsMapList";
import { RestaurantsHashtagsMapCreate } from "./restaurantsHashtagsMap/RestaurantsHashtagsMapCreate";
import { RestaurantsHashtagsMapEdit } from "./restaurantsHashtagsMap/RestaurantsHashtagsMapEdit";
import { RestaurantsHashtagsMapShow } from "./restaurantsHashtagsMap/RestaurantsHashtagsMapShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { SettlementsBreakupList } from "./settlementsBreakup/SettlementsBreakupList";
import { SettlementsBreakupCreate } from "./settlementsBreakup/SettlementsBreakupCreate";
import { SettlementsBreakupEdit } from "./settlementsBreakup/SettlementsBreakupEdit";
import { SettlementsBreakupShow } from "./settlementsBreakup/SettlementsBreakupShow";
import { SsoLookupList } from "./ssoLookup/SsoLookupList";
import { SsoLookupCreate } from "./ssoLookup/SsoLookupCreate";
import { SsoLookupEdit } from "./ssoLookup/SsoLookupEdit";
import { SsoLookupShow } from "./ssoLookup/SsoLookupShow";
import { SubscriptionPlanList } from "./subscriptionPlan/SubscriptionPlanList";
import { SubscriptionPlanCreate } from "./subscriptionPlan/SubscriptionPlanCreate";
import { SubscriptionPlanEdit } from "./subscriptionPlan/SubscriptionPlanEdit";
import { SubscriptionPlanShow } from "./subscriptionPlan/SubscriptionPlanShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { TaxRateInformationList } from "./taxRateInformation/TaxRateInformationList";
import { TaxRateInformationCreate } from "./taxRateInformation/TaxRateInformationCreate";
import { TaxRateInformationEdit } from "./taxRateInformation/TaxRateInformationEdit";
import { TaxRateInformationShow } from "./taxRateInformation/TaxRateInformationShow";
import { TimeWindowList } from "./timeWindow/TimeWindowList";
import { TimeWindowCreate } from "./timeWindow/TimeWindowCreate";
import { TimeWindowEdit } from "./timeWindow/TimeWindowEdit";
import { TimeWindowShow } from "./timeWindow/TimeWindowShow";
import { UserCustomerLookupList } from "./userCustomerLookup/UserCustomerLookupList";
import { UserCustomerLookupCreate } from "./userCustomerLookup/UserCustomerLookupCreate";
import { UserCustomerLookupEdit } from "./userCustomerLookup/UserCustomerLookupEdit";
import { UserCustomerLookupShow } from "./userCustomerLookup/UserCustomerLookupShow";
import { UserFeedbackList } from "./userFeedback/UserFeedbackList";
import { UserFeedbackCreate } from "./userFeedback/UserFeedbackCreate";
import { UserFeedbackEdit } from "./userFeedback/UserFeedbackEdit";
import { UserFeedbackShow } from "./userFeedback/UserFeedbackShow";
import { UsersHashtagsMapList } from "./usersHashtagsMap/UsersHashtagsMapList";
import { UsersHashtagsMapCreate } from "./usersHashtagsMap/UsersHashtagsMapCreate";
import { UsersHashtagsMapEdit } from "./usersHashtagsMap/UsersHashtagsMapEdit";
import { UsersHashtagsMapShow } from "./usersHashtagsMap/UsersHashtagsMapShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"food-delivery-backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AccessLog"
          list={AccessLogList}
          edit={AccessLogEdit}
          create={AccessLogCreate}
          show={AccessLogShow}
        />
        <Resource
          name="AccountRestaurantLookup"
          list={AccountRestaurantLookupList}
          edit={AccountRestaurantLookupEdit}
          create={AccountRestaurantLookupCreate}
          show={AccountRestaurantLookupShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="AccountsAddressMap"
          list={AccountsAddressMapList}
          edit={AccountsAddressMapEdit}
          create={AccountsAddressMapCreate}
          show={AccountsAddressMapShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
        <Resource
          name="ComboGroup"
          list={ComboGroupList}
          edit={ComboGroupEdit}
          create={ComboGroupCreate}
          show={ComboGroupShow}
        />
        <Resource
          name="ComboItemTable"
          list={ComboItemTableList}
          edit={ComboItemTableEdit}
          create={ComboItemTableCreate}
          show={ComboItemTableShow}
        />
        <Resource
          name="ComboItemWindowMap"
          list={ComboItemWindowMapList}
          edit={ComboItemWindowMapEdit}
          create={ComboItemWindowMapCreate}
          show={ComboItemWindowMapShow}
        />
        <Resource
          name="ComplaintItem"
          list={ComplaintItemList}
          edit={ComplaintItemEdit}
          create={ComplaintItemCreate}
          show={ComplaintItemShow}
        />
        <Resource
          name="ComplaintsBook"
          list={ComplaintsBookList}
          edit={ComplaintsBookEdit}
          create={ComplaintsBookCreate}
          show={ComplaintsBookShow}
        />
        <Resource
          name="ComplaintsPhoto"
          list={ComplaintsPhotoList}
          edit={ComplaintsPhotoEdit}
          create={ComplaintsPhotoCreate}
          show={ComplaintsPhotoShow}
        />
        <Resource
          name="ContactDetail"
          list={ContactDetailList}
          edit={ContactDetailEdit}
          create={ContactDetailCreate}
          show={ContactDetailShow}
        />
        <Resource
          name="ContactHashtagsMap"
          list={ContactHashtagsMapList}
          edit={ContactHashtagsMapEdit}
          create={ContactHashtagsMapCreate}
          show={ContactHashtagsMapShow}
        />
        <Resource
          name="CouponRedemption"
          list={CouponRedemptionList}
          edit={CouponRedemptionEdit}
          create={CouponRedemptionCreate}
          show={CouponRedemptionShow}
        />
        <Resource
          name="Coupon"
          list={CouponList}
          edit={CouponEdit}
          create={CouponCreate}
          show={CouponShow}
        />
        <Resource
          name="CustomerAddressMap"
          list={CustomerAddressMapList}
          edit={CustomerAddressMapEdit}
          create={CustomerAddressMapCreate}
          show={CustomerAddressMapShow}
        />
        <Resource
          name="CustomerPreference"
          list={CustomerPreferenceList}
          edit={CustomerPreferenceEdit}
          create={CustomerPreferenceCreate}
          show={CustomerPreferenceShow}
        />
        <Resource
          name="CustomerSubscription"
          list={CustomerSubscriptionList}
          edit={CustomerSubscriptionEdit}
          create={CustomerSubscriptionCreate}
          show={CustomerSubscriptionShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="DailyMenuItemStock"
          list={DailyMenuItemStockList}
          edit={DailyMenuItemStockEdit}
          create={DailyMenuItemStockCreate}
          show={DailyMenuItemStockShow}
        />
        <Resource
          name="DeliveryInstructionAddressMap"
          list={DeliveryInstructionAddressMapList}
          edit={DeliveryInstructionAddressMapEdit}
          create={DeliveryInstructionAddressMapCreate}
          show={DeliveryInstructionAddressMapShow}
        />
        <Resource
          name="DeliveryPartnerInstruction"
          list={DeliveryPartnerInstructionList}
          edit={DeliveryPartnerInstructionEdit}
          create={DeliveryPartnerInstructionCreate}
          show={DeliveryPartnerInstructionShow}
        />
        <Resource
          name="Discount"
          list={DiscountList}
          edit={DiscountEdit}
          create={DiscountCreate}
          show={DiscountShow}
        />
        <Resource
          name="DiscountMenuItem"
          list={DiscountMenuItemList}
          edit={DiscountMenuItemEdit}
          create={DiscountMenuItemCreate}
          show={DiscountMenuItemShow}
        />
        <Resource
          name="DiscountType"
          list={DiscountTypeList}
          edit={DiscountTypeEdit}
          create={DiscountTypeCreate}
          show={DiscountTypeShow}
        />
        <Resource
          name="DiscountWindowMap"
          list={DiscountWindowMapList}
          edit={DiscountWindowMapEdit}
          create={DiscountWindowMapCreate}
          show={DiscountWindowMapShow}
        />
        <Resource
          name="ErrorLog"
          list={ErrorLogList}
          edit={ErrorLogEdit}
          create={ErrorLogCreate}
          show={ErrorLogShow}
        />
        <Resource
          name="FavouriteMenuItem"
          list={FavouriteMenuItemList}
          edit={FavouriteMenuItemEdit}
          create={FavouriteMenuItemCreate}
          show={FavouriteMenuItemShow}
        />
        <Resource
          name="FavouriteRestaurant"
          list={FavouriteRestaurantList}
          edit={FavouriteRestaurantEdit}
          create={FavouriteRestaurantCreate}
          show={FavouriteRestaurantShow}
        />
        <Resource
          name="Favourite"
          list={FavouriteList}
          edit={FavouriteEdit}
          create={FavouriteCreate}
          show={FavouriteShow}
        />
        <Resource
          name="FulfillmentBook"
          list={FulfillmentBookList}
          edit={FulfillmentBookEdit}
          create={FulfillmentBookCreate}
          show={FulfillmentBookShow}
        />
        <Resource
          name="GeoLocation"
          list={GeoLocationList}
          edit={GeoLocationEdit}
          create={GeoLocationCreate}
          show={GeoLocationShow}
        />
        <Resource
          name="Geofence"
          list={GeofenceList}
          edit={GeofenceEdit}
          create={GeofenceCreate}
          show={GeofenceShow}
        />
        <Resource
          name="Hashtag"
          list={HashtagList}
          edit={HashtagEdit}
          create={HashtagCreate}
          show={HashtagShow}
        />
        <Resource
          name="ItemPackagingFee"
          list={ItemPackagingFeeList}
          edit={ItemPackagingFeeEdit}
          create={ItemPackagingFeeCreate}
          show={ItemPackagingFeeShow}
        />
        <Resource
          name="MenuCategory"
          list={MenuCategoryList}
          edit={MenuCategoryEdit}
          create={MenuCategoryCreate}
          show={MenuCategoryShow}
        />
        <Resource
          name="MenuItemIngredient"
          list={MenuItemIngredientList}
          edit={MenuItemIngredientEdit}
          create={MenuItemIngredientCreate}
          show={MenuItemIngredientShow}
        />
        <Resource
          name="MenuItemOption"
          list={MenuItemOptionList}
          edit={MenuItemOptionEdit}
          create={MenuItemOptionCreate}
          show={MenuItemOptionShow}
        />
        <Resource
          name="MenuItem"
          list={MenuItemList}
          edit={MenuItemEdit}
          create={MenuItemCreate}
          show={MenuItemShow}
        />
        <Resource
          name="MenuItemsHashtagsMap"
          list={MenuItemsHashtagsMapList}
          edit={MenuItemsHashtagsMapEdit}
          create={MenuItemsHashtagsMapCreate}
          show={MenuItemsHashtagsMapShow}
        />
        <Resource
          name="MenuItemsOptionsGroup"
          list={MenuItemsOptionsGroupList}
          edit={MenuItemsOptionsGroupEdit}
          create={MenuItemsOptionsGroupCreate}
          show={MenuItemsOptionsGroupShow}
        />
        <Resource
          name="MenuItemsWindowMap"
          list={MenuItemsWindowMapList}
          edit={MenuItemsWindowMapEdit}
          create={MenuItemsWindowMapCreate}
          show={MenuItemsWindowMapShow}
        />
        <Resource
          name="MenuSubCategory"
          list={MenuSubCategoryList}
          edit={MenuSubCategoryEdit}
          create={MenuSubCategoryCreate}
          show={MenuSubCategoryShow}
        />
        <Resource
          name="MerchantInvoice"
          list={MerchantInvoiceList}
          edit={MerchantInvoiceEdit}
          create={MerchantInvoiceCreate}
          show={MerchantInvoiceShow}
        />
        <Resource
          name="NotificationSetting"
          list={NotificationSettingList}
          edit={NotificationSettingEdit}
          create={NotificationSettingCreate}
          show={NotificationSettingShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="OptionsAddOnsItem"
          list={OptionsAddOnsItemList}
          edit={OptionsAddOnsItemEdit}
          create={OptionsAddOnsItemCreate}
          show={OptionsAddOnsItemShow}
        />
        <Resource
          name="OptionsAddonsGroup"
          list={OptionsAddonsGroupList}
          edit={OptionsAddonsGroupEdit}
          create={OptionsAddonsGroupCreate}
          show={OptionsAddonsGroupShow}
        />
        <Resource
          name="OptionsVarientsGroup"
          list={OptionsVarientsGroupList}
          edit={OptionsVarientsGroupEdit}
          create={OptionsVarientsGroupCreate}
          show={OptionsVarientsGroupShow}
        />
        <Resource
          name="OptionsVarientsItem"
          list={OptionsVarientsItemList}
          edit={OptionsVarientsItemEdit}
          create={OptionsVarientsItemCreate}
          show={OptionsVarientsItemShow}
        />
        <Resource
          name="OrderHistory"
          list={OrderHistoryList}
          edit={OrderHistoryEdit}
          create={OrderHistoryCreate}
          show={OrderHistoryShow}
        />
        <Resource
          name="OrderItem"
          list={OrderItemList}
          edit={OrderItemEdit}
          create={OrderItemCreate}
          show={OrderItemShow}
        />
        <Resource
          name="OrderItemsAddon"
          list={OrderItemsAddonList}
          edit={OrderItemsAddonEdit}
          create={OrderItemsAddonCreate}
          show={OrderItemsAddonShow}
        />
        <Resource
          name="OrderItemsRating"
          list={OrderItemsRatingList}
          edit={OrderItemsRatingEdit}
          create={OrderItemsRatingCreate}
          show={OrderItemsRatingShow}
        />
        <Resource
          name="OrderPackagingFee"
          list={OrderPackagingFeeList}
          edit={OrderPackagingFeeEdit}
          create={OrderPackagingFeeCreate}
          show={OrderPackagingFeeShow}
        />
        <Resource
          name="OrdersHashtagsMap"
          list={OrdersHashtagsMapList}
          edit={OrdersHashtagsMapEdit}
          create={OrdersHashtagsMapCreate}
          show={OrdersHashtagsMapShow}
        />
        <Resource
          name="PaymentMethod"
          list={PaymentMethodList}
          edit={PaymentMethodEdit}
          create={PaymentMethodCreate}
          show={PaymentMethodShow}
        />
        <Resource
          name="PaymentsBook"
          list={PaymentsBookList}
          edit={PaymentsBookEdit}
          create={PaymentsBookCreate}
          show={PaymentsBookShow}
        />
        <Resource
          name="PayoutCycle"
          list={PayoutCycleList}
          edit={PayoutCycleEdit}
          create={PayoutCycleCreate}
          show={PayoutCycleShow}
        />
        <Resource
          name="PayoutInformationTable"
          list={PayoutInformationTableList}
          edit={PayoutInformationTableEdit}
          create={PayoutInformationTableCreate}
          show={PayoutInformationTableShow}
        />
        <Resource
          name="PortalUser"
          list={PortalUserList}
          edit={PortalUserEdit}
          create={PortalUserCreate}
          show={PortalUserShow}
        />
        <Resource
          name="PortalUsersRelationsLookup"
          list={PortalUsersRelationsLookupList}
          edit={PortalUsersRelationsLookupEdit}
          create={PortalUsersRelationsLookupCreate}
          show={PortalUsersRelationsLookupShow}
        />
        <Resource
          name="Rating"
          list={RatingList}
          edit={RatingEdit}
          create={RatingCreate}
          show={RatingShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="RestaurantDetail"
          list={RestaurantDetailList}
          edit={RestaurantDetailEdit}
          create={RestaurantDetailCreate}
          show={RestaurantDetailShow}
        />
        <Resource
          name="RestaurantPreference"
          list={RestaurantPreferenceList}
          edit={RestaurantPreferenceEdit}
          create={RestaurantPreferenceCreate}
          show={RestaurantPreferenceShow}
        />
        <Resource
          name="RestaurantTimeWindowMap"
          list={RestaurantTimeWindowMapList}
          edit={RestaurantTimeWindowMapEdit}
          create={RestaurantTimeWindowMapCreate}
          show={RestaurantTimeWindowMapShow}
        />
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="RestaurantsHashtagsMap"
          list={RestaurantsHashtagsMapList}
          edit={RestaurantsHashtagsMapEdit}
          create={RestaurantsHashtagsMapCreate}
          show={RestaurantsHashtagsMapShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="SettlementsBreakup"
          list={SettlementsBreakupList}
          edit={SettlementsBreakupEdit}
          create={SettlementsBreakupCreate}
          show={SettlementsBreakupShow}
        />
        <Resource
          name="SsoLookup"
          list={SsoLookupList}
          edit={SsoLookupEdit}
          create={SsoLookupCreate}
          show={SsoLookupShow}
        />
        <Resource
          name="SubscriptionPlan"
          list={SubscriptionPlanList}
          edit={SubscriptionPlanEdit}
          create={SubscriptionPlanCreate}
          show={SubscriptionPlanShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="TaxRateInformation"
          list={TaxRateInformationList}
          edit={TaxRateInformationEdit}
          create={TaxRateInformationCreate}
          show={TaxRateInformationShow}
        />
        <Resource
          name="TimeWindow"
          list={TimeWindowList}
          edit={TimeWindowEdit}
          create={TimeWindowCreate}
          show={TimeWindowShow}
        />
        <Resource
          name="UserCustomerLookup"
          list={UserCustomerLookupList}
          edit={UserCustomerLookupEdit}
          create={UserCustomerLookupCreate}
          show={UserCustomerLookupShow}
        />
        <Resource
          name="UserFeedback"
          list={UserFeedbackList}
          edit={UserFeedbackEdit}
          create={UserFeedbackCreate}
          show={UserFeedbackShow}
        />
        <Resource
          name="UsersHashtagsMap"
          list={UsersHashtagsMapList}
          edit={UsersHashtagsMapEdit}
          create={UsersHashtagsMapCreate}
          show={UsersHashtagsMapShow}
        />
      </Admin>
    </div>
  );
};

export default App;
