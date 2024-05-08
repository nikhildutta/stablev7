import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { AccountsAddressMapTitle } from "../accountsAddressMap/AccountsAddressMapTitle";
import { ContactDetailTitle } from "../contactDetail/ContactDetailTitle";
import { CustomerAddressMapTitle } from "../customerAddressMap/CustomerAddressMapTitle";
import { DeliveryInstructionAddressMapTitle } from "../deliveryInstructionAddressMap/DeliveryInstructionAddressMapTitle";
import { GeoLocationTitle } from "../geoLocation/GeoLocationTitle";
import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountsAddressMap"
          reference="AccountsAddressMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountsAddressMapTitle} />
        </ReferenceArrayInput>
        <TextInput label="Address Line1" source="addressLine1" />
        <TextInput label="Address Line2" source="addressLine2" />
        <TextInput label="Address Line3" source="addressLine3" />
        <TextInput label="City" source="city" />
        <ReferenceArrayInput
          source="contactDetails"
          reference="ContactDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactDetailTitle} />
        </ReferenceArrayInput>
        <TextInput label="Country" source="country" />
        <ReferenceArrayInput
          source="customerAddressMap"
          reference="CustomerAddressMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerAddressMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="deliveryInstructionAddressMap"
          reference="DeliveryInstructionAddressMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryInstructionAddressMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="geoLocations"
          reference="GeoLocation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GeoLocationTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Primary" source="isPrimary" />
        <TextInput label="Nick Name" source="nickName" />
        <ReferenceArrayInput
          source="orderHistory"
          reference="OrderHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Pincode" source="pincode" />
        <TextInput label="State" source="state" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
