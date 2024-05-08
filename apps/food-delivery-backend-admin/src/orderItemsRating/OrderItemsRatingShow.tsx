import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";
import { RATING_TITLE_FIELD } from "../rating/RatingTitle";

export const OrderItemsRatingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Order Item Rating" source="orderItemRating" />
        <ReferenceField
          label="Order Items"
          source="orderitem.id"
          reference="OrderItem"
        >
          <TextField source={ORDERITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Ratings" source="rating.id" reference="Rating">
          <TextField source={RATING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
