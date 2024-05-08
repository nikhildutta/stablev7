import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PORTALUSER_TITLE_FIELD } from "../portalUser/PortalUserTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const PortalUsersRelationsLookupList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PortalUsersRelationsLookups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
