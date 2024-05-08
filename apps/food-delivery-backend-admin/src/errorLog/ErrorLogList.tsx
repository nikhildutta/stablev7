import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";

export const ErrorLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ErrorLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="App Users"
          source="appuser.id"
          reference="AppUser"
        >
          <TextField source={APPUSER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Error Code" source="errorCode" />
        <TextField label="Error Message" source="errorMessage" />
        <TextField label="ID" source="id" />
        <TextField label="Request Info" source="requestInfo" />
        <TextField label="Stack Trace" source="stackTrace" />
        <TextField label="Timestamp" source="timestamp" />
      </Datagrid>
    </List>
  );
};
