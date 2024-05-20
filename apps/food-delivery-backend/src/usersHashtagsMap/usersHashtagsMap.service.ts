import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersHashtagsMapServiceBase } from "./base/usersHashtagsMap.service.base";

@Injectable()
export class UsersHashtagsMapService extends UsersHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
