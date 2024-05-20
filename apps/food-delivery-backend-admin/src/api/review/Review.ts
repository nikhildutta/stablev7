import { OrderHistory } from "../orderHistory/OrderHistory";

export type Review = {
  body: string | null;
  createdAt: Date | null;
  id: string;
  orderHistory?: OrderHistory;
  reviewImg: string | null;
  title: string | null;
  updatedAt: Date | null;
};
