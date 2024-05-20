import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccountRestaurantLookupTitle } from "../accountRestaurantLookup/AccountRestaurantLookupTitle";
import { ComboGroupTitle } from "../comboGroup/ComboGroupTitle";
import { FavouriteRestaurantTitle } from "../favouriteRestaurant/FavouriteRestaurantTitle";
import { MenuCategoryTitle } from "../menuCategory/MenuCategoryTitle";
import { MerchantInvoiceTitle } from "../merchantInvoice/MerchantInvoiceTitle";
import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";
import { OrderPackagingFeeTitle } from "../orderPackagingFee/OrderPackagingFeeTitle";
import { PayoutCycleTitle } from "../payoutCycle/PayoutCycleTitle";
import { PayoutInformationTableTitle } from "../payoutInformationTable/PayoutInformationTableTitle";
import { PortalUsersRelationsLookupTitle } from "../portalUsersRelationsLookup/PortalUsersRelationsLookupTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";
import { RestaurantDetailTitle } from "../restaurantDetail/RestaurantDetailTitle";
import { RestaurantPreferenceTitle } from "../restaurantPreference/RestaurantPreferenceTitle";
import { RestaurantsHashtagsMapTitle } from "../restaurantsHashtagsMap/RestaurantsHashtagsMapTitle";
import { RestaurantTimeWindowMapTitle } from "../restaurantTimeWindowMap/RestaurantTimeWindowMapTitle";
import { TaxRateInformationTitle } from "../taxRateInformation/TaxRateInformationTitle";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountRestaurantLookup"
          reference="AccountRestaurantLookup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountRestaurantLookupTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Average Cost" source="averageCost" />
        <SelectInput
          source="closure_status"
          label="Closure Status"
          choices={[
            { label: "Temporarily_Closed", value: "Temporarily_Closed" },
            { label: "Permanently_Closed", value: "Permanently_Closed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="comboGroups"
          reference="ComboGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComboGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="favouriteRestaurant"
          reference="FavouriteRestaurant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavouriteRestaurantTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Delivery" source="isDelivery" />
        <BooleanInput label="Is Dine In" source="isDineIn" />
        <BooleanInput label="Is Hidden" source="isHidden" />
        <BooleanInput label="Is Takeaway" source="isTakeaway" />
        <ReferenceArrayInput
          source="menuCategories"
          reference="MenuCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="merchantInvoices"
          reference="MerchantInvoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MerchantInvoiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="orderHistory"
          reference="OrderHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="orderPackagingFee"
          reference="OrderPackagingFee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderPackagingFeeTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="packaging_fee_type"
          label="Packaging Fee Type"
          choices={[
            { label: "Item", value: "Item" },
            { label: "Order", value: "Order" },
            { label: "None", value: "None" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="payoutCycles"
          reference="PayoutCycle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayoutCycleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payoutInformationTable"
          reference="PayoutInformationTable"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayoutInformationTableTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="portalUsersRelationsLookup"
          reference="PortalUsersRelationsLookup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PortalUsersRelationsLookupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="restaurantDetails"
          reference="RestaurantDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantDetailTitle} />
        </ReferenceArrayInput>
        <TextInput label="Restaurant Icon Url" source="restaurantIconUrl" />
        <NumberInput
          step={1}
          label="Restaurant Id Ref"
          source="restaurantIdRef"
        />
        <ReferenceArrayInput
          source="restaurantPreferences"
          reference="RestaurantPreference"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantPreferenceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="restaurantsHashtagsMap"
          reference="RestaurantsHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantsHashtagsMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="restaurantTimeWindowMap"
          reference="RestaurantTimeWindowMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantTimeWindowMapTitle} />
        </ReferenceArrayInput>
        <TextInput label="Share Slug" source="shareSlug" />
        <ReferenceArrayInput
          source="taxRateInformation"
          reference="TaxRateInformation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaxRateInformationTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
