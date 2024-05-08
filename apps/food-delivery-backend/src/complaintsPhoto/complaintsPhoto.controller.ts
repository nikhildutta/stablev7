import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComplaintsPhotoService } from "./complaintsPhoto.service";
import { ComplaintsPhotoControllerBase } from "./base/complaintsPhoto.controller.base";

@swagger.ApiTags("complaintsPhotos")
@common.Controller("complaintsPhotos")
export class ComplaintsPhotoController extends ComplaintsPhotoControllerBase {
  constructor(
    protected readonly service: ComplaintsPhotoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
