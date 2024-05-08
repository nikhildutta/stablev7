import { SortOrder } from "../../util/SortOrder";

export type MerchantInvoiceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceGenerationDate?: SortOrder;
  invoiceSentDate?: SortOrder;
  invoice_status?: SortOrder;
  invoice_type?: SortOrder;
  restaurant_id?: SortOrder;
  updatedAt?: SortOrder;
};
