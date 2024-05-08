import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PortalUserServiceBase } from "./base/portalUser.service.base";

@Injectable()
export class PortalUserService extends PortalUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
