import {IsMongoId, IsNumber, IsString} from "class-validator";

export class ItemValidator {

    @IsMongoId()
    @IsString()
    id: string

    @IsNumber()
    quantity: number

}