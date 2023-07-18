import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";

@Collection()
export class ShopEntity extends AbstractEntity {

    @Prop()
    public name: string

}

export const ShopSchema = SchemaFactory.createForClass(ShopEntity);