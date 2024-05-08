import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantsHashtagsMapServiceBase } from "./base/restaurantsHashtagsMap.service.base";

@Injectable()
export class RestaurantsHashtagsMapService extends RestaurantsHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
