/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderHistory } from "../../orderHistory/base/OrderHistory";
import { PaymentsBook } from "../../paymentsBook/base/PaymentsBook";

@ObjectType()
class PaymentMethod {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  methodDetails!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  methodName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [OrderHistory],
  })
  @ValidateNested()
  @Type(() => OrderHistory)
  @IsOptional()
  orderHistory?: Array<OrderHistory>;

  @ApiProperty({
    required: false,
    type: () => [PaymentsBook],
  })
  @ValidateNested()
  @Type(() => PaymentsBook)
  @IsOptional()
  paymentsBook?: Array<PaymentsBook>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}

export { PaymentMethod as PaymentMethod };