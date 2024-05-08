import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaxRateInformationServiceBase } from "./base/taxRateInformation.service.base";

@Injectable()
export class TaxRateInformationService extends TaxRateInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
