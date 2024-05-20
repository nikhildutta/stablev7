import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTACTDETAIL_TITLE_FIELD } from "../contactDetail/ContactDetailTitle";
import { HASHTAG_TITLE_FIELD } from "./HashtagTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";

export const HashtagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Hash Text" source="hashText" />
        <TextField label="ID" source="id" />
        <TextField label="Tag" source="tag" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="ContactHashtagsMap"
          target="hashtag_id"
          label="ContactHashtagsMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Contact Details"
              source="contactdetail.id"
              reference="ContactDetail"
            >
              <TextField source={CONTACTDETAIL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Hashtags"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MenuItemsHashtagsMap"
          target="hashtag_id"
          label="MenuItemsHashtagsMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Hashtags"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
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
          reference="OrdersHashtagsMap"
          target="hashtag_id"
          label="OrdersHashtagsMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Hashtags"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RestaurantsHashtagsMap"
          target="hashtag_id"
          label="RestaurantsHashtagsMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Hashtags"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
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
        <ReferenceManyField
          reference="UsersHashtagsMap"
          target="hashtag_id"
          label="UsersHashtagsMaps"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
