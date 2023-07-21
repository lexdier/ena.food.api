import {IsBoolean, IsMongoId, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ProductValidator {

    @ApiProperty({name: "shop"})
    @IsMongoId()
    shop: string

    @ApiProperty({name: "name"})
    @IsString()
    name: string

    @ApiProperty({name: "available"})
    @IsBoolean()
    available: boolean

}

export class UpdateProductValidator {

    @ApiProperty({name: "shop"})
    @IsOptional()
    @IsMongoId()
    shop: string

    @ApiProperty({name: "name"})
    @IsOptional()
    @IsString()
    name: string

    @ApiProperty({name: "available"})
    @IsOptional()
    @IsBoolean()
    available: boolean

}