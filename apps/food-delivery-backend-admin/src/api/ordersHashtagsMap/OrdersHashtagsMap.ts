import { Hashtag } from "../hashtag/Hashtag";
import { OrderHistory } from "../orderHistory/OrderHistory";

export type OrdersHashtagsMap = {
  hashtags?: Hashtag;
  id: string;
  orderHistory?: OrderHistory;
};
