import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  cleanliness?: SortOrder;
  createdAt?: SortOrder;
  foodQuality?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  ratingForCustomer?: SortOrder;
  ratingOfDelivery?: SortOrder;
  ratingOfOrder?: SortOrder;
  service?: SortOrder;
  updatedAt?: SortOrder;
  valueForMoney?: SortOrder;
};
