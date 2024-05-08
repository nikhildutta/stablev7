import { ComplaintsBookWhereUniqueInput } from "../complaintsBook/ComplaintsBookWhereUniqueInput";

export type ComplaintsPhotoUpdateInput = {
  complaintImageUrl?: string | null;
  complaintsBook?: ComplaintsBookWhereUniqueInput;
  updatedAt?: Date | null;
};
