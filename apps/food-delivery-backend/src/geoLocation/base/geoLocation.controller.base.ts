/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GeoLocationService } from "../geoLocation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GeoLocationCreateInput } from "./GeoLocationCreateInput";
import { GeoLocation } from "./GeoLocation";
import { GeoLocationFindManyArgs } from "./GeoLocationFindManyArgs";
import { GeoLocationWhereUniqueInput } from "./GeoLocationWhereUniqueInput";
import { GeoLocationUpdateInput } from "./GeoLocationUpdateInput";
import { GeofenceFindManyArgs } from "../../geofence/base/GeofenceFindManyArgs";
import { Geofence } from "../../geofence/base/Geofence";
import { GeofenceWhereUniqueInput } from "../../geofence/base/GeofenceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GeoLocationControllerBase {
  constructor(
    protected readonly service: GeoLocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GeoLocation })
  @nestAccessControl.UseRoles({
    resource: "GeoLocation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGeoLocation(
    @common.Body() data: GeoLocationCreateInput
  ): Promise<GeoLocation> {
    return await this.service.createGeoLocation({
      data: {
        ...data,

        addresses: {
          connect: data.addresses,
        },
      },
      select: {
        addresses: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isGeoFence: true,
        latitude: true,
        longitude: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GeoLocation] })
  @ApiNestedQuery(GeoLocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GeoLocation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async geoLocations(@common.Req() request: Request): Promise<GeoLocation[]> {
    const args = plainToClass(GeoLocationFindManyArgs, request.query);
    return this.service.geoLocations({
      ...args,
      select: {
        addresses: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isGeoFence: true,
        latitude: true,
        longitude: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GeoLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeoLocation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async geoLocation(
    @common.Param() params: GeoLocationWhereUniqueInput
  ): Promise<GeoLocation | null> {
    const result = await this.service.geoLocation({
      where: params,
      select: {
        addresses: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isGeoFence: true,
        latitude: true,
        longitude: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GeoLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeoLocation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGeoLocation(
    @common.Param() params: GeoLocationWhereUniqueInput,
    @common.Body() data: GeoLocationUpdateInput
  ): Promise<GeoLocation | null> {
    try {
      return await this.service.updateGeoLocation({
        where: params,
        data: {
          ...data,

          addresses: {
            connect: data.addresses,
          },
        },
        select: {
          addresses: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isGeoFence: true,
          latitude: true,
          longitude: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GeoLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeoLocation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGeoLocation(
    @common.Param() params: GeoLocationWhereUniqueInput
  ): Promise<GeoLocation | null> {
    try {
      return await this.service.deleteGeoLocation({
        where: params,
        select: {
          addresses: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isGeoFence: true,
          latitude: true,
          longitude: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/geofences")
  @ApiNestedQuery(GeofenceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Geofence",
    action: "read",
    possession: "any",
  })
  async findGeofences(
    @common.Req() request: Request,
    @common.Param() params: GeoLocationWhereUniqueInput
  ): Promise<Geofence[]> {
    const query = plainToClass(GeofenceFindManyArgs, request.query);
    const results = await this.service.findGeofences(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,

        geoLocations: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        radius: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/geofences")
  @nestAccessControl.UseRoles({
    resource: "GeoLocation",
    action: "update",
    possession: "any",
  })
  async connectGeofences(
    @common.Param() params: GeoLocationWhereUniqueInput,
    @common.Body() body: GeofenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      geofences: {
        connect: body,
      },
    };
    await this.service.updateGeoLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/geofences")
  @nestAccessControl.UseRoles({
    resource: "GeoLocation",
    action: "update",
    possession: "any",
  })
  async updateGeofences(
    @common.Param() params: GeoLocationWhereUniqueInput,
    @common.Body() body: GeofenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      geofences: {
        set: body,
      },
    };
    await this.service.updateGeoLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/geofences")
  @nestAccessControl.UseRoles({
    resource: "GeoLocation",
    action: "update",
    possession: "any",
  })
  async disconnectGeofences(
    @common.Param() params: GeoLocationWhereUniqueInput,
    @common.Body() body: GeofenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      geofences: {
        disconnect: body,
      },
    };
    await this.service.updateGeoLocation({
      where: params,
      data,
      select: { id: true },
    });
  }
}