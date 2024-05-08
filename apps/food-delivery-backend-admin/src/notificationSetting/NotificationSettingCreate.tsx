import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";

export const NotificationSettingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appUsers.id"
          reference="AppUser"
          label="App Users"
        >
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <TextInput label="Setting Name" source="settingName" />
        <BooleanInput label="Setting Value" source="settingValue" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
