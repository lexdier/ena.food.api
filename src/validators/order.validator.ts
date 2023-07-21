import {IsMongoId, IsOptional, IsString} from "class-validator";

export class OrderValidator {

    @IsMongoId()
    cart: string

    @IsString()
    address: string

    @IsString()
    payment: string

}

export class UpdateOrderValidator {

    @IsOptional()
    @IsMongoId()
    cart: string

    @IsOptional()
    @IsString()
    address: string

    @IsOptional()
    @IsString()
    payment: string


}