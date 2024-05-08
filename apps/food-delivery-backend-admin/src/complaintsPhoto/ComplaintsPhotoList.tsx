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
import { COMPLAINTSBOOK_TITLE_FIELD } from "../complaintsBook/ComplaintsBookTitle";

export const ComplaintsPhotoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ComplaintsPhotos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Complaint Image Url" source="complaintImageUrl" />
        <ReferenceField
          label="Complaints Book"
          source="complaintsbook.id"
          reference="ComplaintsBook"
        >
          <TextField source={COMPLAINTSBOOK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
