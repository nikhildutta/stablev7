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

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Businessname" source="businessname" />
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Delivery State Code" source="deliveryStateCode" />
        <TextField label="Email" source="email" />
        <TextField label="Fssai License Number" source="fssaiLicenseNumber" />
        <TextField label="Fssai License Url" source="fssaiLicenseUrl" />
        <TextField label="Fssai Valid From" source="fssaiValidFrom" />
        <TextField label="Fssai Valid To" source="fssaiValidTo" />
        <TextField label="ID" source="id" />
        <TextField label="Inceptiondate" source="inceptiondate" />
        <BooleanField
          label="Is Fssai License Verified"
          source="isFssaiLicenseVerified"
        />
        <BooleanField label="Ispaid" source="ispaid" />
        <TextField label="Mobilenumber" source="mobilenumber" />
        <TextField label="Pin" source="pin" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
