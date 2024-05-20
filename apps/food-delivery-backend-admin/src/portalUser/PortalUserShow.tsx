import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PORTALUSER_TITLE_FIELD } from "./PortalUserTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const PortalUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email Id" source="emailId" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Email Id Verified" source="isEmailIdVerified" />
        <BooleanField
          label="Is Phone Number Verified"
          source="isPhoneNumberVerified"
        />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Profile Pic Url" source="profilePicUrl" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="AuditLog"
          target="portal_user_id"
          label="AuditLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="Approved By" source="approvedBy" />
            <DateField source="changedAt" label="Changed At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Approved" source="isApproved" />
            <TextField label="New Data" source="newData" />
            <TextField label="Old Data" source="oldData" />
            <TextField label="Operation Type" source="operationType" />
            <ReferenceField
              label="Portal Users"
              source="portaluser.id"
              reference="PortalUser"
            >
              <TextField source={PORTALUSER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Table Name" source="tableName" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PortalUsersRelationsLookup"
          target="portal_user_id"
          label="PortalUsersRelationsLookups"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
