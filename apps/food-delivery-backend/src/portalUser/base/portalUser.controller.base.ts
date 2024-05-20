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
import { PortalUserService } from "../portalUser.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PortalUserCreateInput } from "./PortalUserCreateInput";
import { PortalUser } from "./PortalUser";
import { PortalUserFindManyArgs } from "./PortalUserFindManyArgs";
import { PortalUserWhereUniqueInput } from "./PortalUserWhereUniqueInput";
import { PortalUserUpdateInput } from "./PortalUserUpdateInput";
import { AuditLogFindManyArgs } from "../../auditLog/base/AuditLogFindManyArgs";
import { AuditLog } from "../../auditLog/base/AuditLog";
import { AuditLogWhereUniqueInput } from "../../auditLog/base/AuditLogWhereUniqueInput";
import { PortalUsersRelationsLookupFindManyArgs } from "../../portalUsersRelationsLookup/base/PortalUsersRelationsLookupFindManyArgs";
import { PortalUsersRelationsLookup } from "../../portalUsersRelationsLookup/base/PortalUsersRelationsLookup";
import { PortalUsersRelationsLookupWhereUniqueInput } from "../../portalUsersRelationsLookup/base/PortalUsersRelationsLookupWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PortalUserControllerBase {
  constructor(
    protected readonly service: PortalUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PortalUser })
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPortalUser(
    @common.Body() data: PortalUserCreateInput
  ): Promise<PortalUser> {
    return await this.service.createPortalUser({
      data: data,
      select: {
        createdAt: true,
        emailId: true,
        id: true,
        isEmailIdVerified: true,
        isPhoneNumberVerified: true,
        phoneNumber: true,
        profilePicUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PortalUser] })
  @ApiNestedQuery(PortalUserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async portalUsers(@common.Req() request: Request): Promise<PortalUser[]> {
    const args = plainToClass(PortalUserFindManyArgs, request.query);
    return this.service.portalUsers({
      ...args,
      select: {
        createdAt: true,
        emailId: true,
        id: true,
        isEmailIdVerified: true,
        isPhoneNumberVerified: true,
        phoneNumber: true,
        profilePicUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PortalUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async portalUser(
    @common.Param() params: PortalUserWhereUniqueInput
  ): Promise<PortalUser | null> {
    const result = await this.service.portalUser({
      where: params,
      select: {
        createdAt: true,
        emailId: true,
        id: true,
        isEmailIdVerified: true,
        isPhoneNumberVerified: true,
        phoneNumber: true,
        profilePicUrl: true,
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
  @swagger.ApiOkResponse({ type: PortalUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePortalUser(
    @common.Param() params: PortalUserWhereUniqueInput,
    @common.Body() data: PortalUserUpdateInput
  ): Promise<PortalUser | null> {
    try {
      return await this.service.updatePortalUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          emailId: true,
          id: true,
          isEmailIdVerified: true,
          isPhoneNumberVerified: true,
          phoneNumber: true,
          profilePicUrl: true,
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
  @swagger.ApiOkResponse({ type: PortalUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePortalUser(
    @common.Param() params: PortalUserWhereUniqueInput
  ): Promise<PortalUser | null> {
    try {
      return await this.service.deletePortalUser({
        where: params,
        select: {
          createdAt: true,
          emailId: true,
          id: true,
          isEmailIdVerified: true,
          isPhoneNumberVerified: true,
          phoneNumber: true,
          profilePicUrl: true,
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
  @common.Get("/:id/auditLogs")
  @ApiNestedQuery(AuditLogFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AuditLog",
    action: "read",
    possession: "any",
  })
  async findAuditLogs(
    @common.Req() request: Request,
    @common.Param() params: PortalUserWhereUniqueInput
  ): Promise<AuditLog[]> {
    const query = plainToClass(AuditLogFindManyArgs, request.query);
    const results = await this.service.findAuditLogs(params.id, {
      ...query,
      select: {
        approvedBy: true,
        changedAt: true,
        id: true,
        isApproved: true,
        newData: true,
        oldData: true,
        operationType: true,

        portalUsers: {
          select: {
            id: true,
          },
        },

        tableName: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/auditLogs")
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "update",
    possession: "any",
  })
  async connectAuditLogs(
    @common.Param() params: PortalUserWhereUniqueInput,
    @common.Body() body: AuditLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      auditLogs: {
        connect: body,
      },
    };
    await this.service.updatePortalUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/auditLogs")
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "update",
    possession: "any",
  })
  async updateAuditLogs(
    @common.Param() params: PortalUserWhereUniqueInput,
    @common.Body() body: AuditLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      auditLogs: {
        set: body,
      },
    };
    await this.service.updatePortalUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/auditLogs")
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "update",
    possession: "any",
  })
  async disconnectAuditLogs(
    @common.Param() params: PortalUserWhereUniqueInput,
    @common.Body() body: AuditLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      auditLogs: {
        disconnect: body,
      },
    };
    await this.service.updatePortalUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/portalUsersRelationsLookup")
  @ApiNestedQuery(PortalUsersRelationsLookupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PortalUsersRelationsLookup",
    action: "read",
    possession: "any",
  })
  async findPortalUsersRelationsLookup(
    @common.Req() request: Request,
    @common.Param() params: PortalUserWhereUniqueInput
  ): Promise<PortalUsersRelationsLookup[]> {
    const query = plainToClass(
      PortalUsersRelationsLookupFindManyArgs,
      request.query
    );
    const results = await this.service.findPortalUsersRelationsLookup(
      params.id,
      {
        ...query,
        select: {
          id: true,

          portalUsers: {
            select: {
              id: true,
            },
          },

          restaurants: {
            select: {
              id: true,
            },
          },

          user_role: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/portalUsersRelationsLookup")
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "update",
    possession: "any",
  })
  async connectPortalUsersRelationsLookup(
    @common.Param() params: PortalUserWhereUniqueInput,
    @common.Body() body: PortalUsersRelationsLookupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      portalUsersRelationsLookup: {
        connect: body,
      },
    };
    await this.service.updatePortalUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/portalUsersRelationsLookup")
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "update",
    possession: "any",
  })
  async updatePortalUsersRelationsLookup(
    @common.Param() params: PortalUserWhereUniqueInput,
    @common.Body() body: PortalUsersRelationsLookupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      portalUsersRelationsLookup: {
        set: body,
      },
    };
    await this.service.updatePortalUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/portalUsersRelationsLookup")
  @nestAccessControl.UseRoles({
    resource: "PortalUser",
    action: "update",
    possession: "any",
  })
  async disconnectPortalUsersRelationsLookup(
    @common.Param() params: PortalUserWhereUniqueInput,
    @common.Body() body: PortalUsersRelationsLookupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      portalUsersRelationsLookup: {
        disconnect: body,
      },
    };
    await this.service.updatePortalUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
