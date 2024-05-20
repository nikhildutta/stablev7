import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderHistoryListRelationFilter } from "../orderHistory/OrderHistoryListRelationFilter";
import { PaymentsBookListRelationFilter } from "../paymentsBook/PaymentsBookListRelationFilter";

export type PaymentMethodWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  methodDetails?: StringNullableFilter;
  methodName?: StringNullableFilter;
  orderHistory?: OrderHistoryListRelationFilter;
  paymentsBook?: PaymentsBookListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
