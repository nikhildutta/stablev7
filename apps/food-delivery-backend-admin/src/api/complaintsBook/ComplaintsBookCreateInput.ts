import { ComplaintItemCreateNestedManyWithoutComplaintsBooksInput } from "./ComplaintItemCreateNestedManyWithoutComplaintsBooksInput";
import { ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput } from "./ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput";
import { PaymentsBookWhereUniqueInput } from "../paymentsBook/PaymentsBookWhereUniqueInput";
import { Decimal } from "decimal.js";

export type ComplaintsBookCreateInput = {
  complaintItem?: ComplaintItemCreateNestedManyWithoutComplaintsBooksInput;
  complaintsPhotos?: ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput;
  issue_category?:
    | "Order_Cancellation"
    | "Missing_Items"
    | "Inadequate_Quantity"
    | "Food_Quality"
    | "Packaging_Issues"
    | "Delivery_Issues"
    | "Payment_Issues"
    | "Other_Issues"
    | null;
  issueDescription?: string | null;
  orderId: string;
  paymentsBook: PaymentsBookWhereUniqueInput;
  refundAmount?: Decimal | null;
  refund_eligibility?:
    | "No_Refund"
    | "Customer_Refund"
    | "Merchant_Refund"
    | "Both"
    | null;
  refund_mode?: "Wallet" | "Original_Payment_Method" | null;
  refund_type?: "Full" | "Partial" | "Custom" | null;
  ticketId: number;
  updatedAt?: Date | null;
};
