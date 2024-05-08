import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  createdAt?: SortOrder;
  discount_type_id?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  maxDiscount?: SortOrder;
  minimumOrderValue?: SortOrder;
  typeOfDiscount?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
