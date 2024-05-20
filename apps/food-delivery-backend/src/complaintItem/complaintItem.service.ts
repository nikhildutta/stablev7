import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplaintItemServiceBase } from "./base/complaintItem.service.base";

@Injectable()
export class ComplaintItemService extends ComplaintItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
