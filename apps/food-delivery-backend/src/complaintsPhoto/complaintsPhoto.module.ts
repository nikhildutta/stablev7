import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplaintsPhotoModuleBase } from "./base/complaintsPhoto.module.base";
import { ComplaintsPhotoService } from "./complaintsPhoto.service";
import { ComplaintsPhotoController } from "./complaintsPhoto.controller";
import { ComplaintsPhotoResolver } from "./complaintsPhoto.resolver";

@Module({
  imports: [ComplaintsPhotoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplaintsPhotoController],
  providers: [ComplaintsPhotoService, ComplaintsPhotoResolver],
  exports: [ComplaintsPhotoService],
})
export class ComplaintsPhotoModule {}
