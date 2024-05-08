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

import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additionaldetails" source="additionaldetails" />
        <TextField label="Anniversary" source="anniversary" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Email" source="email" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Email Verified" source="isEmailVerified" />
        <BooleanField label="Is Mobile Verified" source="isMobileVerified" />
        <TextField label="Mobile" source="mobile" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="CustomerAddressMap"
          target="customerid"
          label="CustomerAddressMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Addresses"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Customers"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserCustomerLookup"
          target="customerid"
          label="UserCustomerLookups"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Customers"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
