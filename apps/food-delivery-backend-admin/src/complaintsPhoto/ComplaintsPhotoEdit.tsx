import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ComplaintsBookTitle } from "../complaintsBook/ComplaintsBookTitle";

export const ComplaintsPhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Complaint Image Url" source="complaintImageUrl" />
        <ReferenceInput
          source="complaintsBook.id"
          reference="ComplaintsBook"
          label="Complaints Book"
        >
          <SelectInput optionText={ComplaintsBookTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
