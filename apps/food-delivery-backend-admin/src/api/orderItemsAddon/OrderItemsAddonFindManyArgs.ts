import { OrderItemsAddonWhereInput } from "./OrderItemsAddonWhereInput";
import { OrderItemsAddonOrderByInput } from "./OrderItemsAddonOrderByInput";

export type OrderItemsAddonFindManyArgs = {
  where?: OrderItemsAddonWhereInput;
  orderBy?: Array<OrderItemsAddonOrderByInput>;
  skip?: number;
  take?: number;
};
