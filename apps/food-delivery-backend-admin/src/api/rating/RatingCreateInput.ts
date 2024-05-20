import { Decimal } from "decimal.js";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";
import { OrderItemsRatingCreateNestedManyWithoutRatingsInput } from "./OrderItemsRatingCreateNestedManyWithoutRatingsInput";

export type RatingCreateInput = {
  cleanliness?: Decimal | null;
  foodQuality?: Decimal | null;
  orderHistory: OrderHistoryWhereUniqueInput;
  orderItemsRatings?: OrderItemsRatingCreateNestedManyWithoutRatingsInput;
  ratingForCustomer?: Decimal | null;
  ratingOfDelivery?: Decimal | null;
  ratingOfOrder?: Decimal | null;
  service?: Decimal | null;
  updatedAt?: Date | null;
  valueForMoney?: Decimal | null;
};
