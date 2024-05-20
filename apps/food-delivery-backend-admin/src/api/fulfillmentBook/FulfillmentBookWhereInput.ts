import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";

export type FulfillmentBookWhereInput = {
  acceptedOrderBy?: StringFilter;
  acceptedOrderStatus?: BooleanNullableFilter;
  acceptedOrderStatusAt?: DateTimeNullableFilter;
  createdAt?: DateTimeNullableFilter;
  customerFulfillmentStatus?: BooleanNullableFilter;
  customerFulfillmentStatusAt?: DateTimeNullableFilter;
  id?: StringFilter;
  markedFulfilledBy?: StringFilter;
  orderHistory?: OrderHistoryWhereUniqueInput;
  partnerPickupAt?: DateTimeNullableFilter;
  partnerPickupBy?: StringFilter;
  partnerPickupStatus?: BooleanNullableFilter;
  readyForPickupBy?: StringFilter;
  readyForPickupStatus?: BooleanNullableFilter;
  readyForPickupStatusAt?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
