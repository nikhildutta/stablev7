/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppUserWhereUniqueInput } from "../../appUser/base/AppUserWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";

@InputType()
class UserCustomerLookupUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AppUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppUserWhereUniqueInput)
  @IsOptional()
  @Field(() => AppUserWhereUniqueInput, {
    nullable: true,
  })
  appUsers?: AppUserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customers?: CustomerWhereUniqueInput;
}

export { UserCustomerLookupUpdateInput as UserCustomerLookupUpdateInput };