import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FulfillmentBookModuleBase } from "./base/fulfillmentBook.module.base";
import { FulfillmentBookService } from "./fulfillmentBook.service";
import { FulfillmentBookController } from "./fulfillmentBook.controller";
import { FulfillmentBookResolver } from "./fulfillmentBook.resolver";

@Module({
  imports: [FulfillmentBookModuleBase, forwardRef(() => AuthModule)],
  controllers: [FulfillmentBookController],
  providers: [FulfillmentBookService, FulfillmentBookResolver],
  exports: [FulfillmentBookService],
})
export class FulfillmentBookModule {}
