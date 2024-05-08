/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SsoLookupCreateInput } from "./SsoLookupCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSsoLookupArgs {
  @ApiProperty({
    required: true,
    type: () => SsoLookupCreateInput,
  })
  @ValidateNested()
  @Type(() => SsoLookupCreateInput)
  @Field(() => SsoLookupCreateInput, { nullable: false })
  data!: SsoLookupCreateInput;
}

export { CreateSsoLookupArgs as CreateSsoLookupArgs };