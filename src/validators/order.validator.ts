import {IsArray, IsMongoId, IsString} from "class-validator";

export class OrderValidator {

    @IsMongoId()
    @IsString()
    user: string

    @IsArray()
    item: string[]

    @IsString()
    address: string[]

    @IsString()
    payment: string[]

}