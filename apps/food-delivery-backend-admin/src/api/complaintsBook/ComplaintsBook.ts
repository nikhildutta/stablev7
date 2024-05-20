import { ComplaintItem } from "../complaintItem/ComplaintItem";
import { ComplaintsPhoto } from "../complaintsPhoto/ComplaintsPhoto";
import { PaymentsBook } from "../paymentsBook/PaymentsBook";
import { Decimal } from "decimal.js";

export type ComplaintsBook = {
  complaintItem?: Array<ComplaintItem>;
  complaintsPhotos?: Array<ComplaintsPhoto>;
  createdAt: Date | null;
  id: string;
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
  issueDescription: string | null;
  orderId: string;
  paymentsBook?: PaymentsBook;
  refundAmount: Decimal | null;
  refund_eligibility?:
    | "No_Refund"
    | "Customer_Refund"
    | "Merchant_Refund"
    | "Both"
    | null;
  refund_mode?: "Wallet" | "Original_Payment_Method" | null;
  refund_type?: "Full" | "Partial" | "Custom" | null;
  ticketCreationTime: Date | null;
  ticketId: number;
  updatedAt: Date | null;
};
