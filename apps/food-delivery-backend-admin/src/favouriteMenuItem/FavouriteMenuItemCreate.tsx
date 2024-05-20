import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FavouriteTitle } from "../favourite/FavouriteTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const FavouriteMenuItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="favourites.id"
          reference="Favourite"
          label="Favourites"
        >
          <SelectInput optionText={FavouriteTitle} />
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
