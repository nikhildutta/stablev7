import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PortalUserTitle } from "../portalUser/PortalUserTitle";

export const AuditLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Approved By" source="approvedBy" />
        <BooleanInput label="Is Approved" source="isApproved" />
        <div />
        <div />
        <TextInput label="Operation Type" source="operationType" />
        <ReferenceInput
          source="portalUsers.id"
          reference="PortalUser"
          label="Portal Users"
        >
          <SelectInput optionText={PortalUserTitle} />
        </ReferenceInput>
        <TextInput label="Table Name" source="tableName" />
      </SimpleForm>
    </Edit>
  );
};
