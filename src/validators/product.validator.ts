import {IsBoolean, IsMongoId, IsOptional, IsString} from "class-validator";

export class ProductValidator {

    @IsMongoId()
    shop: string

    @IsString()
    name: string

    @IsBoolean()
    available: boolean

}

export class UpdateProductValidator {

    @IsOptional()
    @IsMongoId()
    shop: string

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsBoolean()
    available: boolean

}