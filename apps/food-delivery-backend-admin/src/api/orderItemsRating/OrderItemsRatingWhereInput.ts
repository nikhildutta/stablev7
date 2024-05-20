import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type OrderItemsRatingWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  orderItemRating?: DecimalNullableFilter;
  orderItems?: OrderItemWhereUniqueInput;
  ratings?: RatingWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
