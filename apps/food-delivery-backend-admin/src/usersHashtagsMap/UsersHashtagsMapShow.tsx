import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";

export const UsersHashtagsMapShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="App Users"
          source="appuser.id"
          reference="AppUser"
        >
          <TextField source={APPUSER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Hashtags"
          source="hashtag.id"
          reference="Hashtag"
        >
          <TextField source={HASHTAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
