import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MerchantInvoiceUpdateInput = {
  invoiceGenerationDate?: Date | null;
  invoiceSentDate?: Date | null;
  invoice_status?: "Invoice_Generated" | "Invoice_Sent" | "Error_Found" | null;
  invoice_type?: "Online_Order" | "Dine_In" | "Take_Away" | "Recovery" | null;
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: Date | null;
};
