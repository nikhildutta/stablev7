import { ComplaintItemListRelationFilter } from "../complaintItem/ComplaintItemListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";
import { OrderItemsAddonListRelationFilter } from "../orderItemsAddon/OrderItemsAddonListRelationFilter";
import { OrderItemsRatingListRelationFilter } from "../orderItemsRating/OrderItemsRatingListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderItemWhereInput = {
  complaintItem?: ComplaintItemListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  customizationOptions?: StringNullableFilter;
  id?: StringFilter;
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;
  orderHistory?: OrderHistoryWhereUniqueInput;
  orderItemsAddons?: OrderItemsAddonListRelationFilter;
  orderItemsRatings?: OrderItemsRatingListRelationFilter;
  quantity?: IntNullableFilter;
};
