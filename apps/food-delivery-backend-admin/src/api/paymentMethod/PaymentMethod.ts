import { OrderHistory } from "../orderHistory/OrderHistory";
import { PaymentsBook } from "../paymentsBook/PaymentsBook";

export type PaymentMethod = {
  createdAt: Date | null;
  id: string;
  methodDetails: string | null;
  methodName: string | null;
  orderHistory?: Array<OrderHistory>;
  paymentsBook?: Array<PaymentsBook>;
  updatedAt: Date | null;
};
