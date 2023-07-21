import {IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserValidator {

    @ApiProperty({name: "name"})
    @IsString()
    name: string

    @ApiProperty({name: "name"})
    @IsString()
    address: string

}

export class UpdateUserValidator {

    @ApiProperty({name: "name"})
    @IsOptional()
    @IsString()
    name: string

    @ApiProperty({name: "address"})
    @IsOptional()
    @IsString()
    address: string

}