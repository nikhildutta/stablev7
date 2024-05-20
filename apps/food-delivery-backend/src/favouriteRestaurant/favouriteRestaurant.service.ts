import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavouriteRestaurantServiceBase } from "./base/favouriteRestaurant.service.base";

@Injectable()
export class FavouriteRestaurantService extends FavouriteRestaurantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
