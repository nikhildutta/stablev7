import { Decimal } from "decimal.js";
import { Restaurant } from "../restaurant/Restaurant";

export type RestaurantDetail = {
  createdAt: Date | null;
  deliveryCharge: Decimal | null;
  deliveryTime: Date | null;
  description: string | null;
  id: string;
  imageUrl: string | null;
  minOrderValue: Decimal | null;
  rating: Decimal | null;
  restaurants?: Restaurant;
  reviewCount: number | null;
  updatedAt: Date | null;
};
