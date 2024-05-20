import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ComplaintsBookTitle } from "../complaintsBook/ComplaintsBookTitle";

export const ComplaintsPhotoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
