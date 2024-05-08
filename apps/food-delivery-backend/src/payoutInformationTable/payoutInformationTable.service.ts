import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayoutInformationTableServiceBase } from "./base/payoutInformationTable.service.base";

@Injectable()
export class PayoutInformationTableService extends PayoutInformationTableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
