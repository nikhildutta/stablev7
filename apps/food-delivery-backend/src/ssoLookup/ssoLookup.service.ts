import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SsoLookupServiceBase } from "./base/ssoLookup.service.base";

@Injectable()
export class SsoLookupService extends SsoLookupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
