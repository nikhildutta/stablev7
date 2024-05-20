import { Decimal } from "decimal.js";
import { OrderItem } from "../orderItem/OrderItem";
import { Rating } from "../rating/Rating";

export type OrderItemsRating = {
  createdAt: Date | null;
  id: string;
  orderItemRating: Decimal | null;
  orderItems?: OrderItem;
  ratings?: Rating;
  updatedAt: Date | null;
};
