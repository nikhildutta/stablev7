import { ContactDetailWhereUniqueInput } from "../contactDetail/ContactDetailWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ContactHashtagsMapWhereInput = {
  contactDetails?: ContactDetailWhereUniqueInput;
  hashtags?: HashtagWhereUniqueInput;
  id?: StringFilter;
};
