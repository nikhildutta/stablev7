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
import { TaxRateInformationCreateInput } from "./TaxRateInformationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateTaxRateInformationArgs {
  @ApiProperty({
    required: true,
    type: () => TaxRateInformationCreateInput,
  })
  @ValidateNested()
  @Type(() => TaxRateInformationCreateInput)
  @Field(() => TaxRateInformationCreateInput, { nullable: false })
  data!: TaxRateInformationCreateInput;
}

export { CreateTaxRateInformationArgs as CreateTaxRateInformationArgs };
