import { ComplaintsBook } from "../complaintsBook/ComplaintsBook";
import { OrderHistory } from "../orderHistory/OrderHistory";
import { Decimal } from "decimal.js";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";

export type PaymentsBook = {
  complaintsBook?: Array<ComplaintsBook>;
  createdAt: Date | null;
  errorCode: number | null;
  id: string;
  orderHistory?: OrderHistory;
  paymentAmount: Decimal | null;
  paymentCurrency: string | null;
  paymentDate: Date | null;
  paymentMethods?: PaymentMethod;
  paymentStatus: boolean | null;
  updatedAt: Date | null;
};
