import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONTACTDETAIL_TITLE_FIELD } from "./ContactDetailTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const ContactDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Addresses"
          source="address.id"
          reference="Address"
        >
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Contact Name" source="contactName" />
        <TextField label="Contact Number" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="ContactHashtagsMap"
          target="contact_detail_id"
          label="ContactHashtagsMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Contact Details"
              source="contactdetail.id"
              reference="ContactDetail"
            >
              <TextField source={CONTACTDETAIL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Hashtags"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
