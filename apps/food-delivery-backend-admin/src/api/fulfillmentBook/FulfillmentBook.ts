import { OrderHistory } from "../orderHistory/OrderHistory";

export type FulfillmentBook = {
  acceptedOrderBy: string;
  acceptedOrderStatus: boolean | null;
  acceptedOrderStatusAt: Date | null;
  createdAt: Date | null;
  customerFulfillmentStatus: boolean | null;
  customerFulfillmentStatusAt: Date | null;
  id: string;
  markedFulfilledBy: string;
  orderHistory?: OrderHistory;
  partnerPickupAt: Date | null;
  partnerPickupBy: string;
  partnerPickupStatus: boolean | null;
  readyForPickupBy: string;
  readyForPickupStatus: boolean | null;
  readyForPickupStatusAt: Date | null;
  updatedAt: Date | null;
};
