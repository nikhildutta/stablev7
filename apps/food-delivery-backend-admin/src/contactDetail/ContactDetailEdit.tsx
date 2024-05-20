import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { ContactHashtagsMapTitle } from "../contactHashtagsMap/ContactHashtagsMapTitle";

export const ContactDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="addresses.id"
          reference="Address"
          label="Addresses"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="contactHashtagsMap"
          reference="ContactHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactHashtagsMapTitle} />
        </ReferenceArrayInput>
        <TextInput label="Contact Name" source="contactName" />
        <TextInput label="Contact Number" source="contactNumber" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
