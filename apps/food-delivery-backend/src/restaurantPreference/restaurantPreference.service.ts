import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantPreferenceServiceBase } from "./base/restaurantPreference.service.base";

@Injectable()
export class RestaurantPreferenceService extends RestaurantPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
