import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerAddressMapServiceBase } from "./base/customerAddressMap.service.base";

@Injectable()
export class CustomerAddressMapService extends CustomerAddressMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
