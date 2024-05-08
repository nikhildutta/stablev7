import { MerchantInvoiceWhereInput } from "./MerchantInvoiceWhereInput";
import { MerchantInvoiceOrderByInput } from "./MerchantInvoiceOrderByInput";

export type MerchantInvoiceFindManyArgs = {
  where?: MerchantInvoiceWhereInput;
  orderBy?: Array<MerchantInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
