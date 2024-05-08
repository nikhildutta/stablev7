import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";

export type OrdersHashtagsMapWhereInput = {
  hashtags?: HashtagWhereUniqueInput;
  id?: StringFilter;
  orderHistory?: OrderHistoryWhereUniqueInput;
};
