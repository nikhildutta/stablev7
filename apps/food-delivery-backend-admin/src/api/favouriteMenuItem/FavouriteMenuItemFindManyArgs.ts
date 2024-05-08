import { FavouriteMenuItemWhereInput } from "./FavouriteMenuItemWhereInput";
import { FavouriteMenuItemOrderByInput } from "./FavouriteMenuItemOrderByInput";

export type FavouriteMenuItemFindManyArgs = {
  where?: FavouriteMenuItemWhereInput;
  orderBy?: Array<FavouriteMenuItemOrderByInput>;
  skip?: number;
  take?: number;
};
