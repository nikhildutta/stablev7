import { Hashtag } from "../hashtag/Hashtag";
import { MenuItem } from "../menuItem/MenuItem";

export type MenuItemsHashtagsMap = {
  hashtags?: Hashtag;
  id: string;
  menuItems?: MenuItem;
};
