import { Restaurant } from "../restaurant/Restaurant";

export type RestaurantPreference = {
  createdAt: Date | null;
  id: string;
  preferenceType: string | null;
  preferenceValue: string | null;
  restaurants?: Restaurant;
  updatedAt: Date | null;
};
