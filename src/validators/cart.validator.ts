import {IsArray, IsMongoId, IsOptional} from "class-validator";
import {ItemEntity} from "../entities/item.entity";

export class CartValidator {

    @IsArray()
    items: ItemEntity[]

    @IsMongoId()
    user: string

    @IsMongoId()
    shop: string
}

export class UpdateCartValidator {

    @IsOptional()
    @IsArray()
    items: string[]

    @IsOptional()
    @IsMongoId()
    user: string

    @IsOptional()
    @IsMongoId()
    shop: string

}