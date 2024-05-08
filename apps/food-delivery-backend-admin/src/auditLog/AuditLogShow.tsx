import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PORTALUSER_TITLE_FIELD } from "../portalUser/PortalUserTitle";

export const AuditLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
