import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeliveryInstructionAddressMapResolverBase } from "./base/deliveryInstructionAddressMap.resolver.base";
import { DeliveryInstructionAddressMap } from "./base/DeliveryInstructionAddressMap";
import { DeliveryInstructionAddressMapService } from "./deliveryInstructionAddressMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeliveryInstructionAddressMap)
export class DeliveryInstructionAddressMapResolver extends DeliveryInstructionAddressMapResolverBase {
  constructor(
    protected readonly service: DeliveryInstructionAddressMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
