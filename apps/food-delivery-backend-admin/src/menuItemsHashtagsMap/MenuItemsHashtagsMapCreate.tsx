import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HashtagTitle } from "../hashtag/HashtagTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const MenuItemsHashtagsMapCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="hashtags.id"
          reference="Hashtag"
          label="Hashtags"
        >
          <SelectInput optionText={HashtagTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="menuItems.id"
          reference="MenuItem"
          label="Menu Items"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
