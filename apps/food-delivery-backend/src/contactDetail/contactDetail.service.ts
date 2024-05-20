import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactDetailServiceBase } from "./base/contactDetail.service.base";

@Injectable()
export class ContactDetailService extends ContactDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
