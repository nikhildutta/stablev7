import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MerchantInvoiceWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceGenerationDate?: DateTimeNullableFilter;
  invoiceSentDate?: DateTimeNullableFilter;
  invoice_status?: "Invoice_Generated" | "Invoice_Sent" | "Error_Found";
  invoice_type?: "Online_Order" | "Dine_In" | "Take_Away" | "Recovery";
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
