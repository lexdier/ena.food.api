import {OrderEntity} from "./order.entity";
import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import {ProductEntity} from "./product.entity";

@Collection()
export class ItemEntity extends AbstractEntity {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'orders'})
    public order: OrderEntity

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'products'})
    public product: ProductEntity

    @Prop()
    public quantity: number


}

export const ItemSchema = SchemaFactory.createForClass(ItemEntity);