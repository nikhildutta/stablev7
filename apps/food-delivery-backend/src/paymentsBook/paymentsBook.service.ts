import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentsBookServiceBase } from "./base/paymentsBook.service.base";

@Injectable()
export class PaymentsBookService extends PaymentsBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
