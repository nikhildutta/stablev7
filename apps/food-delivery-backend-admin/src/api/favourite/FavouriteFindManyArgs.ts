import { FavouriteWhereInput } from "./FavouriteWhereInput";
import { FavouriteOrderByInput } from "./FavouriteOrderByInput";

export type FavouriteFindManyArgs = {
  where?: FavouriteWhereInput;
  orderBy?: Array<FavouriteOrderByInput>;
  skip?: number;
  take?: number;
};
