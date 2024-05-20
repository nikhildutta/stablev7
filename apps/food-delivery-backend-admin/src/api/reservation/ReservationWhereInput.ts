import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReservationWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  partySize?: IntNullableFilter;
  reservationDate?: DateTimeNullableFilter;
  reservationTime?: DateTimeNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  status?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
