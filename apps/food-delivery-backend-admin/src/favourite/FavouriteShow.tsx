import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FAVOURITE_TITLE_FIELD } from "./FavouriteTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";

export const FavouriteShow = (props: ShowProps): React.ReactElement => {
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="FavouriteMenuItem"
          target="Favourite_id"
          label="FavouriteMenuItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Favourites"
              source="favourite.id"
              reference="Favourite"
            >
              <TextField source={FAVOURITE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FavouriteRestaurant"
          target="Favourite_id"
          label="FavouriteRestaurants"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Favourites"
              source="favourite.id"
              reference="Favourite"
            >
              <TextField source={FAVOURITE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
