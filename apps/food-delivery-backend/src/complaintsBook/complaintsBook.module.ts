import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplaintsBookModuleBase } from "./base/complaintsBook.module.base";
import { ComplaintsBookService } from "./complaintsBook.service";
import { ComplaintsBookController } from "./complaintsBook.controller";
import { ComplaintsBookResolver } from "./complaintsBook.resolver";

@Module({
  imports: [ComplaintsBookModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplaintsBookController],
  providers: [ComplaintsBookService, ComplaintsBookResolver],
  exports: [ComplaintsBookService],
})
export class ComplaintsBookModule {}
