import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";

export type UsersHashtagsMapUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  hashtags?: HashtagWhereUniqueInput;
};
