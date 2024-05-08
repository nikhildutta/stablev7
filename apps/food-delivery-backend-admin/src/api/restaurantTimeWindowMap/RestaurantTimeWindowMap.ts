import { Restaurant } from "../restaurant/Restaurant";
import { TimeWindow } from "../timeWindow/TimeWindow";

export type RestaurantTimeWindowMap = {
  createdAt: Date | null;
  day_of_the_week?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | null;
  id: string;
  restaurants?: Restaurant;
  timeWindow?: TimeWindow;
  updatedAt: Date | null;
};
