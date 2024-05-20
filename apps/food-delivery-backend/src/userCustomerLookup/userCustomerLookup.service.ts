import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserCustomerLookupServiceBase } from "./base/userCustomerLookup.service.base";

@Injectable()
export class UserCustomerLookupService extends UserCustomerLookupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
