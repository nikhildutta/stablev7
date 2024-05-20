import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeliveryPartnerInstructionResolverBase } from "./base/deliveryPartnerInstruction.resolver.base";
import { DeliveryPartnerInstruction } from "./base/DeliveryPartnerInstruction";
import { DeliveryPartnerInstructionService } from "./deliveryPartnerInstruction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeliveryPartnerInstruction)
export class DeliveryPartnerInstructionResolver extends DeliveryPartnerInstructionResolverBase {
  constructor(
    protected readonly service: DeliveryPartnerInstructionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
