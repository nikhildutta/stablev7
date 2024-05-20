import { AppUser } from "../appUser/AppUser";
import { Restaurant } from "../restaurant/Restaurant";

export type Reservation = {
  appUsers?: AppUser;
  createdAt: Date | null;
  id: string;
  partySize: number | null;
  reservationDate: Date | null;
  reservationTime: Date | null;
  restaurants?: Restaurant;
  status: string | null;
  updatedAt: Date | null;
};
