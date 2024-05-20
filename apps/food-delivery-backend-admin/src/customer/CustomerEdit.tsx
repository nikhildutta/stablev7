import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { CustomerAddressMapTitle } from "../customerAddressMap/CustomerAddressMapTitle";
import { UserCustomerLookupTitle } from "../userCustomerLookup/UserCustomerLookupTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Additionaldetails" source="additionaldetails" />
        <DateTimeInput label="Anniversary" source="anniversary" />
        <ReferenceArrayInput
          source="customerAddressMap"
          reference="CustomerAddressMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerAddressMapTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Date Of Birth" source="dateOfBirth" />
        <TextInput label="Email" source="email" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
            {
              label: "Prefer_not_to_disclose",
              value: "Prefer_not_to_disclose",
            },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="Is Email Verified" source="isEmailVerified" />
        <BooleanInput label="Is Mobile Verified" source="isMobileVerified" />
        <TextInput label="Mobile" source="mobile" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceArrayInput
          source="userCustomerLookup"
          reference="UserCustomerLookup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserCustomerLookupTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
