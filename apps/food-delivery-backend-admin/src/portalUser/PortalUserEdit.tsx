import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { AuditLogTitle } from "../auditLog/AuditLogTitle";
import { PortalUsersRelationsLookupTitle } from "../portalUsersRelationsLookup/PortalUsersRelationsLookupTitle";

export const PortalUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="auditLogs"
          reference="AuditLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AuditLogTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email Id" source="emailId" />
        <BooleanInput label="Is Email Id Verified" source="isEmailIdVerified" />
        <BooleanInput
          label="Is Phone Number Verified"
          source="isPhoneNumberVerified"
        />
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceArrayInput
          source="portalUsersRelationsLookup"
          reference="PortalUsersRelationsLookup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PortalUsersRelationsLookupTitle} />
        </ReferenceArrayInput>
        <TextInput label="Profile Pic Url" source="profilePicUrl" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
