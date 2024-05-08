import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";

export const AccessLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AccessLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Action" source="action" />
        <ReferenceField
          label="App Users"
          source="appuser.id"
          reference="AppUser"
        >
          <TextField source={APPUSER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Device Info" source="deviceInfo" />
        <TextField label="Error Message" source="errorMessage" />
        <TextField label="ID" source="id" />
        <TextField label="Ip Address" source="ipAddress" />
        <TextField label="Response Status" source="responseStatus" />
        <TextField label="Timestamp" source="timestamp" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
