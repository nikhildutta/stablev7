import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";

export const CustomerPreferenceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appUsers.id"
          reference="AppUser"
          label="App Users"
        >
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <TextInput label="Preference Type" source="preferenceType" />
        <TextInput label="Preference Value" source="preferenceValue" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
