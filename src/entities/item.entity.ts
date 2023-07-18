import {OrderEntity} from "./order.entity";
import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";

@Collection()
export class ItemEntity {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'orders'})
    public order: OrderEntity

    @Prop()
    public name: string


}

export const ItemSchema = SchemaFactory.createForClass(ItemEntity);