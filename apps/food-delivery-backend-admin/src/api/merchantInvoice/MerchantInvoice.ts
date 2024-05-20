import { Restaurant } from "../restaurant/Restaurant";

export type MerchantInvoice = {
  createdAt: Date | null;
  id: string;
  invoiceGenerationDate: Date | null;
  invoiceSentDate: Date | null;
  invoice_status?: "Invoice_Generated" | "Invoice_Sent" | "Error_Found" | null;
  invoice_type?: "Online_Order" | "Dine_In" | "Take_Away" | "Recovery" | null;
  restaurants?: Restaurant;
  updatedAt: Date | null;
};
