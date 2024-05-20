import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ReservationUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  partySize?: number | null;
  reservationDate?: Date | null;
  reservationTime?: Date | null;
  restaurants?: RestaurantWhereUniqueInput;
  status?: string | null;
  updatedAt?: Date | null;
};
