import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COMPLAINTSBOOK_TITLE_FIELD } from "../complaintsBook/ComplaintsBookTitle";

export const ComplaintsPhotoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
