/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PortalUsersRelationsLookupWhereUniqueInput } from "../../portalUsersRelationsLookup/base/PortalUsersRelationsLookupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PortalUsersRelationsLookupUpdateManyWithoutPortalUsersInput {
  @Field(() => [PortalUsersRelationsLookupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PortalUsersRelationsLookupWhereUniqueInput],
  })
  connect?: Array<PortalUsersRelationsLookupWhereUniqueInput>;

  @Field(() => [PortalUsersRelationsLookupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PortalUsersRelationsLookupWhereUniqueInput],
  })
  disconnect?: Array<PortalUsersRelationsLookupWhereUniqueInput>;

  @Field(() => [PortalUsersRelationsLookupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PortalUsersRelationsLookupWhereUniqueInput],
  })
  set?: Array<PortalUsersRelationsLookupWhereUniqueInput>;
}

export { PortalUsersRelationsLookupUpdateManyWithoutPortalUsersInput as PortalUsersRelationsLookupUpdateManyWithoutPortalUsersInput };
