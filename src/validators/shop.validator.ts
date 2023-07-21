import {IsOptional, IsString} from "class-validator";

export class ShopValidator {

    @IsString()
    name: string

    @IsString()
    address: string

}

export class UpdateShopValidator {

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    address: string

}