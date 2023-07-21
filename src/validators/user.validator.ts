import {IsString} from "class-validator";

export class UserValidator {

    @IsString()
    name: string

    @IsString()
    address: string

}