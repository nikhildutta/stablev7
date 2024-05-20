import { ComplaintItemUpdateManyWithoutOrderItemsInput } from "./ComplaintItemUpdateManyWithoutOrderItemsInput";
import { OptionsVarientsItemWhereUniqueInput } from "../optionsVarientsItem/OptionsVarientsItemWhereUniqueInput";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";
import { OrderItemsAddonUpdateManyWithoutOrderItemsInput } from "./OrderItemsAddonUpdateManyWithoutOrderItemsInput";
import { OrderItemsRatingUpdateManyWithoutOrderItemsInput } from "./OrderItemsRatingUpdateManyWithoutOrderItemsInput";

export type OrderItemUpdateInput = {
  complaintItem?: ComplaintItemUpdateManyWithoutOrderItemsInput;
  customizationOptions?: string | null;
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;
  orderHistory?: OrderHistoryWhereUniqueInput;
  orderItemsAddons?: OrderItemsAddonUpdateManyWithoutOrderItemsInput;
  orderItemsRatings?: OrderItemsRatingUpdateManyWithoutOrderItemsInput;
  quantity?: number | null;
};
