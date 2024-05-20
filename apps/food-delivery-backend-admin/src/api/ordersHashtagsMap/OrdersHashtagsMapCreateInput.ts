import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";

export type OrdersHashtagsMapCreateInput = {
  hashtags: HashtagWhereUniqueInput;
  orderHistory: OrderHistoryWhereUniqueInput;
};
