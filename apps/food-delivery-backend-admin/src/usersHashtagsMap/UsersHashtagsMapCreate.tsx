import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AppUserTitle } from "../appUser/AppUserTitle";
import { HashtagTitle } from "../hashtag/HashtagTitle";

export const UsersHashtagsMapCreate = (
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
        <ReferenceInput
          source="hashtags.id"
          reference="Hashtag"
          label="Hashtags"
        >
          <SelectInput optionText={HashtagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
