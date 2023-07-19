import {IsArray, IsMongoId, IsString} from "class-validator";
import {ItemEntity} from "../entities/item.entity";

export class OrderValidator {

    @IsMongoId()
    @IsString()
    user: string

    @IsArray()
    items: ItemEntity[]

    @IsString()
    address: string[]

    @IsString()
    payment: string[]

}