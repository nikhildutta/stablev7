import { ComplaintItemCreateNestedManyWithoutOrderItemsInput } from "./ComplaintItemCreateNestedManyWithoutOrderItemsInput";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";
import { OrderItemsAddonCreateNestedManyWithoutOrderItemsInput } from "./OrderItemsAddonCreateNestedManyWithoutOrderItemsInput";
import { OrderItemsRatingCreateNestedManyWithoutOrderItemsInput } from "./OrderItemsRatingCreateNestedManyWithoutOrderItemsInput";

export type OrderItemCreateInput = {
  complaintItem?: ComplaintItemCreateNestedManyWithoutOrderItemsInput;
  customizationOptions?: string | null;
  optionsVarientsItem: OptionsVarientsItemWhereUniqueInput;
  orderHistory: OrderHistoryWhereUniqueInput;
  orderItemsAddons?: OrderItemsAddonCreateNestedManyWithoutOrderItemsInput;
  orderItemsRatings?: OrderItemsRatingCreateNestedManyWithoutOrderItemsInput;
  quantity?: number | null;
};
