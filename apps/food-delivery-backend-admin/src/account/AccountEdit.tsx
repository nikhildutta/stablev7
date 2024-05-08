import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { AccountRestaurantLookupTitle } from "../accountRestaurantLookup/AccountRestaurantLookupTitle";
import { AccountsAddressMapTitle } from "../accountsAddressMap/AccountsAddressMapTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountRestaurantLookup"
          reference="AccountRestaurantLookup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountRestaurantLookupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="accountsAddressMap"
          reference="AccountsAddressMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountsAddressMapTitle} />
        </ReferenceArrayInput>
        <TextInput label="Businessname" source="businessname" />
        <TextInput label="City" source="city" />
        <TextInput label="Delivery State Code" source="deliveryStateCode" />
        <TextInput label="Email" source="email" />
        <TextInput label="Fssai License Number" source="fssaiLicenseNumber" />
        <TextInput label="Fssai License Url" source="fssaiLicenseUrl" />
        <DateTimeInput label="Fssai Valid From" source="fssaiValidFrom" />
        <DateTimeInput label="Fssai Valid To" source="fssaiValidTo" />
        <DateTimeInput label="Inceptiondate" source="inceptiondate" />
        <BooleanInput
          label="Is Fssai License Verified"
          source="isFssaiLicenseVerified"
        />
        <BooleanInput label="Ispaid" source="ispaid" />
        <TextInput label="Mobilenumber" source="mobilenumber" />
        <TextInput label="Pin" source="pin" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
