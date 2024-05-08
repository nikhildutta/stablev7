import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HashtagTitle } from "../hashtag/HashtagTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const MenuItemsHashtagsMapEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
