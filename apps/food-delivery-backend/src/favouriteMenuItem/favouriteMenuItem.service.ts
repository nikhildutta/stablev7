import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavouriteMenuItemServiceBase } from "./base/favouriteMenuItem.service.base";

@Injectable()
export class FavouriteMenuItemService extends FavouriteMenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
