import { ComplaintsBook } from "../complaintsBook/ComplaintsBook";

export type ComplaintsPhoto = {
  complaintImageUrl: string | null;
  complaintsBook?: ComplaintsBook;
  createdAt: Date | null;
  id: string;
  updatedAt: Date | null;
};
