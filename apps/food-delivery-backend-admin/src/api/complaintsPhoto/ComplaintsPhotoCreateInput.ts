import { ComplaintsBookWhereUniqueInput } from "../complaintsBook/ComplaintsBookWhereUniqueInput";

export type ComplaintsPhotoCreateInput = {
  complaintImageUrl?: string | null;
  complaintsBook: ComplaintsBookWhereUniqueInput;
  updatedAt?: Date | null;
};
