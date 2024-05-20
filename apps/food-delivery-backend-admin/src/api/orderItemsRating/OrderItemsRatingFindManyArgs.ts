import { OrderItemsRatingWhereInput } from "./OrderItemsRatingWhereInput";
import { OrderItemsRatingOrderByInput } from "./OrderItemsRatingOrderByInput";

export type OrderItemsRatingFindManyArgs = {
  where?: OrderItemsRatingWhereInput;
  orderBy?: Array<OrderItemsRatingOrderByInput>;
  skip?: number;
  take?: number;
};
