import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const ItemPackagingFeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Menu Items"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Packing Fee" source="packingFee" />
      </SimpleShowLayout>
    </Show>
  );
};
