import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContactHashtagsMapResolverBase } from "./base/contactHashtagsMap.resolver.base";
import { ContactHashtagsMap } from "./base/ContactHashtagsMap";
import { ContactHashtagsMapService } from "./contactHashtagsMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContactHashtagsMap)
export class ContactHashtagsMapResolver extends ContactHashtagsMapResolverBase {
  constructor(
    protected readonly service: ContactHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
