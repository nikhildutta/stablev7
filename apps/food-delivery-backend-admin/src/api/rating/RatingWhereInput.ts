import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";
import { OrderItemsRatingListRelationFilter } from "../orderItemsRating/OrderItemsRatingListRelationFilter";

export type RatingWhereInput = {
  cleanliness?: DecimalNullableFilter;
  createdAt?: DateTimeNullableFilter;
  foodQuality?: DecimalNullableFilter;
  id?: StringFilter;
  orderHistory?: OrderHistoryWhereUniqueInput;
  orderItemsRatings?: OrderItemsRatingListRelationFilter;
  ratingForCustomer?: DecimalNullableFilter;
  ratingOfDelivery?: DecimalNullableFilter;
  ratingOfOrder?: DecimalNullableFilter;
  service?: DecimalNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  valueForMoney?: DecimalNullableFilter;
};
