import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PortalUsersRelationsLookupServiceBase } from "./base/portalUsersRelationsLookup.service.base";

@Injectable()
export class PortalUsersRelationsLookupService extends PortalUsersRelationsLookupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
