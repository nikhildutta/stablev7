import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplaintsPhotoServiceBase } from "./base/complaintsPhoto.service.base";

@Injectable()
export class ComplaintsPhotoService extends ComplaintsPhotoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
