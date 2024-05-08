import { Decimal } from "decimal.js";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantDetailCreateInput = {
  deliveryCharge?: Decimal | null;
  deliveryTime?: Date | null;
  description?: string | null;
  imageUrl?: string | null;
  minOrderValue?: Decimal | null;
  rating?: Decimal | null;
  restaurants: RestaurantWhereUniqueInput;
  reviewCount?: number | null;
  updatedAt?: Date | null;
};
