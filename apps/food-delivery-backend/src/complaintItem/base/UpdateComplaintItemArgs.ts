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
import { ComplaintItemWhereUniqueInput } from "./ComplaintItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ComplaintItemUpdateInput } from "./ComplaintItemUpdateInput";

@ArgsType()
class UpdateComplaintItemArgs {
  @ApiProperty({
    required: true,
    type: () => ComplaintItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ComplaintItemWhereUniqueInput)
  @Field(() => ComplaintItemWhereUniqueInput, { nullable: false })
  where!: ComplaintItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ComplaintItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => ComplaintItemUpdateInput)
  @Field(() => ComplaintItemUpdateInput, { nullable: false })
  data!: ComplaintItemUpdateInput;
}

export { UpdateComplaintItemArgs as UpdateComplaintItemArgs };