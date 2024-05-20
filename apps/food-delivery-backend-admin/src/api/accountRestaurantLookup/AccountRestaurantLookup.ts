import { Account } from "../account/Account";
import { Restaurant } from "../restaurant/Restaurant";

export type AccountRestaurantLookup = {
  accounts?: Account;
  id: string;
  restaurants?: Restaurant;
};
