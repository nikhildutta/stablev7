import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type MenuItemsHashtagsMapWhereInput = {
  hashtags?: HashtagWhereUniqueInput;
  id?: StringFilter;
  menuItems?: MenuItemWhereUniqueInput;
};
