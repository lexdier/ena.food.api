import {IsOptional, IsString} from "class-validator";

export class UserValidator {

    @IsString()
    name: string

    @IsString()
    address: string

}

export class UpdateUserValidator {

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    address: string

}