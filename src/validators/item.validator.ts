import {IsMongoId, IsNumber} from "class-validator";

export class ItemValidator {

    @IsMongoId()
    product: string

    @IsNumber()
    quantity: number

}