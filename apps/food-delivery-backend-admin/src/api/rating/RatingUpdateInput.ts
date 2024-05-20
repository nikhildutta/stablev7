import { Decimal } from "decimal.js";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";
import { OrderItemsRatingUpdateManyWithoutRatingsInput } from "./OrderItemsRatingUpdateManyWithoutRatingsInput";

export type RatingUpdateInput = {
  cleanliness?: Decimal | null;
  foodQuality?: Decimal | null;
  orderHistory?: OrderHistoryWhereUniqueInput;
  orderItemsRatings?: OrderItemsRatingUpdateManyWithoutRatingsInput;
  ratingForCustomer?: Decimal | null;
  ratingOfDelivery?: Decimal | null;
  ratingOfOrder?: Decimal | null;
  service?: Decimal | null;
  updatedAt?: Date | null;
  valueForMoney?: Decimal | null;
};
