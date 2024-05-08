import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";

export type OrdersHashtagsMapUpdateInput = {
  hashtags?: HashtagWhereUniqueInput;
  orderHistory?: OrderHistoryWhereUniqueInput;
};
