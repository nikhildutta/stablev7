import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplaintsBookServiceBase } from "./base/complaintsBook.service.base";

@Injectable()
export class ComplaintsBookService extends ComplaintsBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
