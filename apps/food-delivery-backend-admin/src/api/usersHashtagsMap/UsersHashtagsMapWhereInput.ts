import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UsersHashtagsMapWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  hashtags?: HashtagWhereUniqueInput;
  id?: StringFilter;
};
