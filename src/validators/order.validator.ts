import {IsMongoId, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class OrderValidator {

    @ApiProperty({name: "cart"})
    @IsMongoId()
    cart: string

    @ApiProperty({name: "address"})
    @IsString()
    address: string

    @ApiProperty({name: "payment"})
    @IsString()
    payment: string

}

export class UpdateOrderValidator {

    @ApiProperty({name: "cart"})
    @IsOptional()
    @IsMongoId()
    cart: string

    @ApiProperty({name: "address"})
    @IsOptional()
    @IsString()
    address: string

    @ApiProperty({name: "payment"})
    @IsOptional()
    @IsString()
    payment: string


}