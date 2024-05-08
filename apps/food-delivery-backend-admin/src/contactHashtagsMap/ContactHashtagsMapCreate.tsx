import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContactDetailTitle } from "../contactDetail/ContactDetailTitle";
import { HashtagTitle } from "../hashtag/HashtagTitle";

export const ContactHashtagsMapCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="contactDetails.id"
          reference="ContactDetail"
          label="Contact Details"
        >
          <SelectInput optionText={ContactDetailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="hashtags.id"
          reference="Hashtag"
          label="Hashtags"
        >
          <SelectInput optionText={HashtagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
