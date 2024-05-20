import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavouriteServiceBase } from "./base/favourite.service.base";

@Injectable()
export class FavouriteService extends FavouriteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
