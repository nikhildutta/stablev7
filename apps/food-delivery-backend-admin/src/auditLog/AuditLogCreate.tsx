import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PortalUserTitle } from "../portalUser/PortalUserTitle";

export const AuditLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
