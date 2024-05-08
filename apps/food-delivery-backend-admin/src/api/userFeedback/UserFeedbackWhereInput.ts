import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserFeedbackWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  feedbackText?: StringNullableFilter;
  id?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
