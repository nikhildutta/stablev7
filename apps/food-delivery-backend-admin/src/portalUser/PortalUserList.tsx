import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PortalUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PortalUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
