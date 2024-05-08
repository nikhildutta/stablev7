import { Decimal } from "decimal.js";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type OrderItemsRatingUpdateInput = {
  orderItemRating?: Decimal | null;
  orderItems?: OrderItemWhereUniqueInput;
  ratings?: RatingWhereUniqueInput;
  updatedAt?: Date | null;
};
