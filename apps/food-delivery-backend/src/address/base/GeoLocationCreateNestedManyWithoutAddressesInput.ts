/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GeoLocationWhereUniqueInput } from "../../geoLocation/base/GeoLocationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class GeoLocationCreateNestedManyWithoutAddressesInput {
  @Field(() => [GeoLocationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GeoLocationWhereUniqueInput],
  })
  connect?: Array<GeoLocationWhereUniqueInput>;
}

export { GeoLocationCreateNestedManyWithoutAddressesInput as GeoLocationCreateNestedManyWithoutAddressesInput };