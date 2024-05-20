import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContactDetailTitle } from "../contactDetail/ContactDetailTitle";
import { HashtagTitle } from "../hashtag/HashtagTitle";

export const ContactHashtagsMapEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
