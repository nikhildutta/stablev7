import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";

export const SsoLookupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Apple Email" source="appleEmail" />
        <TextField label="Apple Family Name" source="appleFamilyName" />
        <TextField label="Apple Given Name" source="appleGivenName" />
        <TextField label="Apple Refresh Token" source="appleRefreshToken" />
        <TextField
          label="Apple Token Expires At"
          source="appleTokenExpiresAt"
        />
        <TextField label="Apple User Id" source="appleUserId" />
        <ReferenceField
          label="App Users"
          source="appuser.id"
          reference="AppUser"
        >
          <TextField source={APPUSER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Facebook Access Token" source="facebookAccessToken" />
        <TextField label="Facebook Email" source="facebookEmail" />
        <TextField label="Facebook Name" source="facebookName" />
        <TextField
          label="Facebook Token Expires At"
          source="facebookTokenExpiresAt"
        />
        <TextField label="Facebook User Id" source="facebookUserId" />
        <TextField label="Google Email" source="googleEmail" />
        <TextField label="Google Family Name" source="googleFamilyName" />
        <TextField label="Google Given Name" source="googleGivenName" />
        <TextField label="Google Refresh Token" source="googleRefreshToken" />
        <TextField
          label="Google Token Expires At"
          source="googleTokenExpiresAt"
        />
        <TextField label="Google User Id" source="googleUserId" />
        <TextField label="ID" source="id" />
        <TextField label="Twitter Access Token" source="twitterAccessToken" />
        <TextField label="Twitter Handle" source="twitterHandle" />
        <TextField label="Twitter Token Secret" source="twitterTokenSecret" />
        <TextField label="Twitter User Id" source="twitterUserId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
