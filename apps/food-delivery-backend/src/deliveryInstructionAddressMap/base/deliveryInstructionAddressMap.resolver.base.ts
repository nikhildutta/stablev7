/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DeliveryInstructionAddressMap } from "./DeliveryInstructionAddressMap";
import { DeliveryInstructionAddressMapCountArgs } from "./DeliveryInstructionAddressMapCountArgs";
import { DeliveryInstructionAddressMapFindManyArgs } from "./DeliveryInstructionAddressMapFindManyArgs";
import { DeliveryInstructionAddressMapFindUniqueArgs } from "./DeliveryInstructionAddressMapFindUniqueArgs";
import { CreateDeliveryInstructionAddressMapArgs } from "./CreateDeliveryInstructionAddressMapArgs";
import { UpdateDeliveryInstructionAddressMapArgs } from "./UpdateDeliveryInstructionAddressMapArgs";
import { DeleteDeliveryInstructionAddressMapArgs } from "./DeleteDeliveryInstructionAddressMapArgs";
import { Address } from "../../address/base/Address";
import { DeliveryPartnerInstruction } from "../../deliveryPartnerInstruction/base/DeliveryPartnerInstruction";
import { DeliveryInstructionAddressMapService } from "../deliveryInstructionAddressMap.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeliveryInstructionAddressMap)
export class DeliveryInstructionAddressMapResolverBase {
  constructor(
    protected readonly service: DeliveryInstructionAddressMapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DeliveryInstructionAddressMap",
    action: "read",
    possession: "any",
  })
  async _deliveryInstructionAddressMapsMeta(
    @graphql.Args() args: DeliveryInstructionAddressMapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DeliveryInstructionAddressMap])
  @nestAccessControl.UseRoles({
    resource: "DeliveryInstructionAddressMap",
    action: "read",
    possession: "any",
  })
  async deliveryInstructionAddressMaps(
    @graphql.Args() args: DeliveryInstructionAddressMapFindManyArgs
  ): Promise<DeliveryInstructionAddressMap[]> {
    return this.service.deliveryInstructionAddressMaps(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DeliveryInstructionAddressMap, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DeliveryInstructionAddressMap",
    action: "read",
    possession: "own",
  })
  async deliveryInstructionAddressMap(
    @graphql.Args() args: DeliveryInstructionAddressMapFindUniqueArgs
  ): Promise<DeliveryInstructionAddressMap | null> {
    const result = await this.service.deliveryInstructionAddressMap(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DeliveryInstructionAddressMap)
  @nestAccessControl.UseRoles({
    resource: "DeliveryInstructionAddressMap",
    action: "create",
    possession: "any",
  })
  async createDeliveryInstructionAddressMap(
    @graphql.Args() args: CreateDeliveryInstructionAddressMapArgs
  ): Promise<DeliveryInstructionAddressMap> {
    return await this.service.createDeliveryInstructionAddressMap({
      ...args,
      data: {
        ...args.data,

        addresses: {
          connect: args.data.addresses,
        },

        deliveryPartnerInstruction: {
          connect: args.data.deliveryPartnerInstruction,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DeliveryInstructionAddressMap)
  @nestAccessControl.UseRoles({
    resource: "DeliveryInstructionAddressMap",
    action: "update",
    possession: "any",
  })
  async updateDeliveryInstructionAddressMap(
    @graphql.Args() args: UpdateDeliveryInstructionAddressMapArgs
  ): Promise<DeliveryInstructionAddressMap | null> {
    try {
      return await this.service.updateDeliveryInstructionAddressMap({
        ...args,
        data: {
          ...args.data,

          addresses: {
            connect: args.data.addresses,
          },

          deliveryPartnerInstruction: {
            connect: args.data.deliveryPartnerInstruction,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DeliveryInstructionAddressMap)
  @nestAccessControl.UseRoles({
    resource: "DeliveryInstructionAddressMap",
    action: "delete",
    possession: "any",
  })
  async deleteDeliveryInstructionAddressMap(
    @graphql.Args() args: DeleteDeliveryInstructionAddressMapArgs
  ): Promise<DeliveryInstructionAddressMap | null> {
    try {
      return await this.service.deleteDeliveryInstructionAddressMap(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Address, {
    nullable: true,
    name: "addresses",
  })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async getAddresses(
    @graphql.Parent() parent: DeliveryInstructionAddressMap
  ): Promise<Address | null> {
    const result = await this.service.getAddresses(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => DeliveryPartnerInstruction, {
    nullable: true,
    name: "deliveryPartnerInstruction",
  })
  @nestAccessControl.UseRoles({
    resource: "DeliveryPartnerInstruction",
    action: "read",
    possession: "any",
  })
  async getDeliveryPartnerInstruction(
    @graphql.Parent() parent: DeliveryInstructionAddressMap
  ): Promise<DeliveryPartnerInstruction | null> {
    const result = await this.service.getDeliveryPartnerInstruction(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
