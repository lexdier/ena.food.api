import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import {Schema} from "mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import {ProductEntity} from "./product.entity";

@Collection({timestamps: true})
export class ItemEntity extends AbstractEntity {

    @Prop({type: Schema.Types.ObjectId, ref: 'products'})
    public product: ProductEntity

    @Prop({type: Schema.Types.Number})
    public quantity: number

}

export const ItemSchema = SchemaFactory.createForClass(ItemEntity);