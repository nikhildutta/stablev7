import { ComboGroupWhereUniqueInput } from "../comboGroup/ComboGroupWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TimeWindowWhereUniqueInput } from "../timeWindow/TimeWindowWhereUniqueInput";

export type ComboItemWindowMapWhereInput = {
  comboGroups?: ComboGroupWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  is247?: BooleanNullableFilter;
  timeWindow?: TimeWindowWhereUniqueInput;
  time_window_day?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | "All_Days";
  updatedAt?: DateTimeNullableFilter;
};
