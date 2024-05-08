import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderItemsRatingServiceBase } from "./base/orderItemsRating.service.base";

@Injectable()
export class OrderItemsRatingService extends OrderItemsRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
