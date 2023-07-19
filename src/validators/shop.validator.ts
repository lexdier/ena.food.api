import {IsString} from "class-validator";

export class ShopValidator {

    @IsString()
    name: string

}