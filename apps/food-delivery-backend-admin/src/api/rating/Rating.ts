import { Decimal } from "decimal.js";
import { OrderHistory } from "../orderHistory/OrderHistory";
import { OrderItemsRating } from "../orderItemsRating/OrderItemsRating";

export type Rating = {
  cleanliness: Decimal | null;
  createdAt: Date | null;
  foodQuality: Decimal | null;
  id: string;
  orderHistory?: OrderHistory;
  orderItemsRatings?: Array<OrderItemsRating>;
  ratingForCustomer: Decimal | null;
  ratingOfDelivery: Decimal | null;
  ratingOfOrder: Decimal | null;
  service: Decimal | null;
  updatedAt: Date | null;
  valueForMoney: Decimal | null;
};
