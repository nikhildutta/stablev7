import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PORTALUSER_TITLE_FIELD } from "../portalUser/PortalUserTitle";

export const AuditLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AuditLogs"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
