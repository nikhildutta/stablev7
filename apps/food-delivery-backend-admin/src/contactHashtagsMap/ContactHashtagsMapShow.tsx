import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { CONTACTDETAIL_TITLE_FIELD } from "../contactDetail/ContactDetailTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";

export const ContactHashtagsMapShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
