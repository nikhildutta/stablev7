import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";

export const SsoLookupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Apple Email" source="appleEmail" />
        <TextInput label="Apple Family Name" source="appleFamilyName" />
        <TextInput label="Apple Given Name" source="appleGivenName" />
        <TextInput label="Apple Refresh Token" source="appleRefreshToken" />
        <DateTimeInput
          label="Apple Token Expires At"
          source="appleTokenExpiresAt"
        />
        <TextInput label="Apple User Id" source="appleUserId" />
        <ReferenceInput
          source="appUsers.id"
          reference="AppUser"
          label="App Users"
        >
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <TextInput label="Facebook Access Token" source="facebookAccessToken" />
        <TextInput label="Facebook Email" source="facebookEmail" />
        <TextInput label="Facebook Name" source="facebookName" />
        <DateTimeInput
          label="Facebook Token Expires At"
          source="facebookTokenExpiresAt"
        />
        <TextInput label="Facebook User Id" source="facebookUserId" />
        <TextInput label="Google Email" source="googleEmail" />
        <TextInput label="Google Family Name" source="googleFamilyName" />
        <TextInput label="Google Given Name" source="googleGivenName" />
        <TextInput label="Google Refresh Token" source="googleRefreshToken" />
        <DateTimeInput
          label="Google Token Expires At"
          source="googleTokenExpiresAt"
        />
        <TextInput label="Google User Id" source="googleUserId" />
        <TextInput label="Twitter Access Token" source="twitterAccessToken" />
        <TextInput label="Twitter Handle" source="twitterHandle" />
        <TextInput label="Twitter Token Secret" source="twitterTokenSecret" />
        <TextInput label="Twitter User Id" source="twitterUserId" />
      </SimpleForm>
    </Edit>
  );
};
