import { Favourite } from "../favourite/Favourite";
import { MenuItem } from "../menuItem/MenuItem";

export type FavouriteMenuItem = {
  createdAt: Date | null;
  favourites?: Favourite;
  id: string;
  menuItems?: MenuItem;
};
