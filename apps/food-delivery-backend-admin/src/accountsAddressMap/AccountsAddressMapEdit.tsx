import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { AddressTitle } from "../address/AddressTitle";

export const AccountsAddressMapEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accounts.id"
          reference="Account"
          label="Accounts"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="addresses.id"
          reference="Address"
          label="Addresses"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
