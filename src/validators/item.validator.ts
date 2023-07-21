import {IsMongoId, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ItemValidator {

    @ApiProperty({name: "product"})
    @IsMongoId()
    product: string

    @ApiProperty({name: "quantity"})
    @IsNumber()
    quantity: number

}