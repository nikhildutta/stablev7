import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Additionaldetails" source="additionaldetails" />
        <TextField label="Anniversary" source="anniversary" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Email" source="email" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Email Verified" source="isEmailVerified" />
        <BooleanField label="Is Mobile Verified" source="isMobileVerified" />
        <TextField label="Mobile" source="mobile" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
