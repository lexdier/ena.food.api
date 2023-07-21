import {IsArray, IsMongoId, IsOptional, IsString} from "class-validator";
import {ItemEntity} from "../entities/item.entity";

export class OrderValidator {

    @IsMongoId()
    user: string

    @IsArray()
    items: ItemEntity[]

    @IsString()
    address: string

    @IsString()
    payment: string

}

export class UpdateOrderValidator {

    @IsOptional()
    @IsMongoId()
    user: string

    @IsOptional()
    @IsArray()
    items: ItemEntity[]

    @IsOptional()
    @IsString()
    address: string

    @IsOptional()
    @IsString()
    payment: string


}