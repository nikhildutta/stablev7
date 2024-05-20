import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";

export type FulfillmentBookCreateInput = {
  acceptedOrderBy: string;
  acceptedOrderStatus?: boolean | null;
  acceptedOrderStatusAt?: Date | null;
  customerFulfillmentStatus?: boolean | null;
  customerFulfillmentStatusAt?: Date | null;
  markedFulfilledBy: string;
  orderHistory: OrderHistoryWhereUniqueInput;
  partnerPickupAt?: Date | null;
  partnerPickupBy: string;
  partnerPickupStatus?: boolean | null;
  readyForPickupBy: string;
  readyForPickupStatus?: boolean | null;
  readyForPickupStatusAt?: Date | null;
  updatedAt?: Date | null;
};
