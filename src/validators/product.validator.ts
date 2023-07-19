import {IsBoolean, IsMongoId, IsString} from "class-validator";

export class ProductValidator {

    @IsMongoId()
    shop: string

    @IsString()
    name: string

    @IsBoolean()
    available: boolean

}