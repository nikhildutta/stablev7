import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONTACTDETAIL_TITLE_FIELD } from "../contactDetail/ContactDetailTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";

export const ContactHashtagsMapList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContactHashtagsMaps"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
