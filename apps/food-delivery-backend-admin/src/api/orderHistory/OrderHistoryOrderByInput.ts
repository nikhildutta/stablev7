import { SortOrder } from "../../util/SortOrder";

export type OrderHistoryOrderByInput = {
  delivery_address_id?: SortOrder;
  user_id?: SortOrder;
  coupon_id?: SortOrder;
  createdAt?: SortOrder;
  deliveryTipsAmount?: SortOrder;
  discountAmount?: SortOrder;
  estimatedDeliveryTime?: SortOrder;
  finalAmount?: SortOrder;
  id?: SortOrder;
  isCancelled?: SortOrder;
  isFulfilled?: SortOrder;
  isPaid?: SortOrder;
  isRejected?: SortOrder;
  orderDateTime?: SortOrder;
  orderIdRef?: SortOrder;
  order_type?: SortOrder;
  packagingAmount?: SortOrder;
  payment_method_id?: SortOrder;
  preparationInstruction?: SortOrder;
  preparationTime?: SortOrder;
  rejectedBy?: SortOrder;
  restaurant_id?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
