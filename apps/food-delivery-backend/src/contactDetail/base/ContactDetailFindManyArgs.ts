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
import { ContactDetailWhereInput } from "./ContactDetailWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContactDetailOrderByInput } from "./ContactDetailOrderByInput";

@ArgsType()
class ContactDetailFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContactDetailWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContactDetailWhereInput, { nullable: true })
  @Type(() => ContactDetailWhereInput)
  where?: ContactDetailWhereInput;

  @ApiProperty({
    required: false,
    type: [ContactDetailOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContactDetailOrderByInput], { nullable: true })
  @Type(() => ContactDetailOrderByInput)
  orderBy?: Array<ContactDetailOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ContactDetailFindManyArgs as ContactDetailFindManyArgs };