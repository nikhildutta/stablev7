import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ComplaintsBookWhereUniqueInput } from "../complaintsBook/ComplaintsBookWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ComplaintsPhotoWhereInput = {
  complaintImageUrl?: StringNullableFilter;
  complaintsBook?: ComplaintsBookWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
