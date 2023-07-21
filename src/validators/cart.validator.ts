import {IsArray, IsMongoId, IsOptional} from "class-validator";
import {ItemEntity} from "../entities/item.entity";
import {ItemValidator} from "./item.validator";
import {Type} from "class-transformer";

export class CartValidator {

    @IsArray()
    items: ItemEntity[]

    @IsMongoId()
    user: string

}

export class UpdateCartValidator {

    @IsOptional()
    @IsArray()
    @Type(() => ItemValidator)
    items: ItemValidator[]

    @IsOptional()
    @IsMongoId()
    user: string

}