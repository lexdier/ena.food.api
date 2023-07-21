import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";

@Collection({timestamps: true})
export class ShopEntity extends AbstractEntity {

    @Prop()
    public name: string

    @Prop()
    public address: string

}

export const ShopSchema = SchemaFactory.createForClass(ShopEntity);