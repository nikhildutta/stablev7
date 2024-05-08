import { SortOrder } from "../../util/SortOrder";

export type ComplaintsBookOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  issue_category?: SortOrder;
  issueDescription?: SortOrder;
  orderId?: SortOrder;
  payments_book_id?: SortOrder;
  refundAmount?: SortOrder;
  refund_eligibility?: SortOrder;
  refund_mode?: SortOrder;
  refund_type?: SortOrder;
  ticketCreationTime?: SortOrder;
  ticketId?: SortOrder;
  updatedAt?: SortOrder;
};
