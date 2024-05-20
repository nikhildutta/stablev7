import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { PORTALUSER_TITLE_FIELD } from "../portalUser/PortalUserTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const PortalUsersRelationsLookupShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Portal Users"
          source="portaluser.id"
          reference="PortalUser"
        >
          <TextField source={PORTALUSER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Restaurants"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="User Role" source="user_role" />
      </SimpleShowLayout>
    </Show>
  );
};
