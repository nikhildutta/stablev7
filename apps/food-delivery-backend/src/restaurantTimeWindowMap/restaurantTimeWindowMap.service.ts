import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantTimeWindowMapServiceBase } from "./base/restaurantTimeWindowMap.service.base";

@Injectable()
export class RestaurantTimeWindowMapService extends RestaurantTimeWindowMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
