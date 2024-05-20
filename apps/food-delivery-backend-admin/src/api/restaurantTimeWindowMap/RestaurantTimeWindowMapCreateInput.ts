import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { TimeWindowWhereUniqueInput } from "../timeWindow/TimeWindowWhereUniqueInput";

export type RestaurantTimeWindowMapCreateInput = {
  day_of_the_week?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | null;
  restaurants: RestaurantWhereUniqueInput;
  timeWindow: TimeWindowWhereUniqueInput;
  updatedAt?: Date | null;
};
