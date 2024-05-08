import { ContactDetailWhereUniqueInput } from "../contactDetail/ContactDetailWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";

export type ContactHashtagsMapUpdateInput = {
  contactDetails?: ContactDetailWhereUniqueInput;
  hashtags?: HashtagWhereUniqueInput;
};
