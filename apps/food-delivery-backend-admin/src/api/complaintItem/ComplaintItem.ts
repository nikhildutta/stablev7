import { ComplaintsBook } from "../complaintsBook/ComplaintsBook";
import { OrderItem } from "../orderItem/OrderItem";

export type ComplaintItem = {
  complaintsBook?: ComplaintsBook;
  createdAt: Date | null;
  id: string;
  isRefund: boolean | null;
  orderItems?: OrderItem;
  updatedAt: Date | null;
};
