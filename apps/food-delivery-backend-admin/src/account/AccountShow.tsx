import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Businessname" source="businessname" />
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Delivery State Code" source="deliveryStateCode" />
        <TextField label="Email" source="email" />
        <TextField label="Fssai License Number" source="fssaiLicenseNumber" />
        <TextField label="Fssai License Url" source="fssaiLicenseUrl" />
        <TextField label="Fssai Valid From" source="fssaiValidFrom" />
        <TextField label="Fssai Valid To" source="fssaiValidTo" />
        <TextField label="ID" source="id" />
        <TextField label="Inceptiondate" source="inceptiondate" />
        <BooleanField
          label="Is Fssai License Verified"
          source="isFssaiLicenseVerified"
        />
        <BooleanField label="Ispaid" source="ispaid" />
        <TextField label="Mobilenumber" source="mobilenumber" />
        <TextField label="Pin" source="pin" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="AccountRestaurantLookup"
          target="accountid"
          label="AccountRestaurantLookups"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Accounts"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AccountsAddressMap"
          target="accountid"
          label="AccountsAddressMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Accounts"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Addresses"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
