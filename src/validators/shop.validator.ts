import {IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ShopValidator {

    @ApiProperty({name: "name"})
    @IsString()
    name: string

    @ApiProperty({name: "address"})
    @IsString()
    address: string

}

export class UpdateShopValidator {

    @ApiProperty({name: "name"})
    @IsOptional()
    @IsString()
    name: string

    @ApiProperty({name: "address"})
    @IsOptional()
    @IsString()
    address: string

}