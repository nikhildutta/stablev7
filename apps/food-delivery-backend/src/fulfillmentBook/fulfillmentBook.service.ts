import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FulfillmentBookServiceBase } from "./base/fulfillmentBook.service.base";

@Injectable()
export class FulfillmentBookService extends FulfillmentBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
