/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumComplaintsBookIssueCategory {
  OrderCancellation = "Order_Cancellation",
  MissingItems = "Missing_Items",
  InadequateQuantity = "Inadequate_Quantity",
  FoodQuality = "Food_Quality",
  PackagingIssues = "Packaging_Issues",
  DeliveryIssues = "Delivery_Issues",
  PaymentIssues = "Payment_Issues",
  OtherIssues = "Other_Issues",
}

registerEnumType(EnumComplaintsBookIssueCategory, {
  name: "EnumComplaintsBookIssueCategory",
});
