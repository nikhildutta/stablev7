import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountsAddressMapServiceBase } from "./base/accountsAddressMap.service.base";

@Injectable()
export class AccountsAddressMapService extends AccountsAddressMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
