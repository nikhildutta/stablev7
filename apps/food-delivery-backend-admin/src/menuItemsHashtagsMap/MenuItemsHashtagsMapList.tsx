import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const MenuItemsHashtagsMapList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MenuItemsHashtagsMaps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Hashtags"
          source="hashtag.id"
          reference="Hashtag"
        >
          <TextField source={HASHTAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Menu Items"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
