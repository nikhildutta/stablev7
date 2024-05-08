import { SortOrder } from "../../util/SortOrder";

export type FulfillmentBookOrderByInput = {
  acceptedOrderBy?: SortOrder;
  acceptedOrderStatus?: SortOrder;
  acceptedOrderStatusAt?: SortOrder;
  createdAt?: SortOrder;
  customerFulfillmentStatus?: SortOrder;
  customerFulfillmentStatusAt?: SortOrder;
  id?: SortOrder;
  markedFulfilledBy?: SortOrder;
  order_id?: SortOrder;
  partnerPickupAt?: SortOrder;
  partnerPickupBy?: SortOrder;
  partnerPickupStatus?: SortOrder;
  readyForPickupBy?: SortOrder;
  readyForPickupStatus?: SortOrder;
  readyForPickupStatusAt?: SortOrder;
  updatedAt?: SortOrder;
};
