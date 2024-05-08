import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";

export type ReviewUpdateInput = {
  body?: string | null;
  orderHistory?: OrderHistoryWhereUniqueInput;
  reviewImg?: string | null;
  title?: string | null;
  updatedAt?: Date | null;
};
