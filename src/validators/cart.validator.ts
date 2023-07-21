import {IsArray, IsMongoId, IsOptional} from "class-validator";
import {ItemEntity} from "../entities/item.entity";
import {ItemValidator} from "./item.validator";
import {Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CartValidator {

    @ApiProperty({name: "items"})
    @IsArray()
    items: ItemEntity[]

    @ApiProperty({name: "user"})
    @IsMongoId()
    user: string

}

export class UpdateCartValidator {

    @ApiProperty({name: "items"})
    @IsOptional()
    @IsArray()
    @Type(() => ItemValidator)
    items: ItemValidator[]

    @ApiProperty({name: "user"})
    @IsOptional()
    @IsMongoId()
    user: string

}