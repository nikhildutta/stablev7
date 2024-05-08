import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { TimeWindowWhereUniqueInput } from "../timeWindow/TimeWindowWhereUniqueInput";

export type RestaurantTimeWindowMapWhereInput = {
  createdAt?: DateTimeNullableFilter;
  day_of_the_week?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  id?: StringFilter;
  restaurants?: RestaurantWhereUniqueInput;
  timeWindow?: TimeWindowWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
