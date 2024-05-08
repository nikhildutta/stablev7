import { ComplaintItemListRelationFilter } from "../complaintItem/ComplaintItemListRelationFilter";
import { ComplaintsPhotoListRelationFilter } from "../complaintsPhoto/ComplaintsPhotoListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentsBookWhereUniqueInput } from "../paymentsBook/PaymentsBookWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type ComplaintsBookWhereInput = {
  complaintItem?: ComplaintItemListRelationFilter;
  complaintsPhotos?: ComplaintsPhotoListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  issue_category?:
    | "Order_Cancellation"
    | "Missing_Items"
    | "Inadequate_Quantity"
    | "Food_Quality"
    | "Packaging_Issues"
    | "Delivery_Issues"
    | "Payment_Issues"
    | "Other_Issues";
  issueDescription?: StringNullableFilter;
  orderId?: StringFilter;
  paymentsBook?: PaymentsBookWhereUniqueInput;
  refundAmount?: DecimalNullableFilter;
  refund_eligibility?:
    | "No_Refund"
    | "Customer_Refund"
    | "Merchant_Refund"
    | "Both";
  refund_mode?: "Wallet" | "Original_Payment_Method";
  refund_type?: "Full" | "Partial" | "Custom";
  ticketCreationTime?: DateTimeNullableFilter;
  ticketId?: IntFilter;
  updatedAt?: DateTimeNullableFilter;
};
