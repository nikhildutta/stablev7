import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountRestaurantLookupServiceBase } from "./base/accountRestaurantLookup.service.base";

@Injectable()
export class AccountRestaurantLookupService extends AccountRestaurantLookupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
