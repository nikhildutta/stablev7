import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  user_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  partySize?: SortOrder;
  reservationDate?: SortOrder;
  reservationTime?: SortOrder;
  restaurant_id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
