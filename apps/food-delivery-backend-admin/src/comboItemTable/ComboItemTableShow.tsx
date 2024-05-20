import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { COMBOGROUP_TITLE_FIELD } from "../comboGroup/ComboGroupTitle";
import { OPTIONSVARIENTSITEM_TITLE_FIELD } from "../optionsVarientsItem/OptionsVarientsItemTitle";

export const ComboItemTableShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Combo Groups"
          source="combogroup.id"
          reference="ComboGroup"
        >
          <TextField source={COMBOGROUP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Addon Allowed" source="isAddonAllowed" />
        <ReferenceField
          label="Options Varients Item"
          source="optionsvarientsitem.id"
          reference="OptionsVarientsItem"
        >
          <TextField source={OPTIONSVARIENTSITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
