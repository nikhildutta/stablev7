import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";

export const OrdersHashtagsMapShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Hashtags"
          source="hashtag.id"
          reference="Hashtag"
        >
          <TextField source={HASHTAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Order History"
          source="orderhistory.id"
          reference="OrderHistory"
        >
          <TextField source={ORDERHISTORY_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
