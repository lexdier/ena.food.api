import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import {CartEntity} from "./cart.entity";

@Collection()
export class OrderEntity extends AbstractEntity {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'carts'})
    cart: CartEntity | string

    @Prop()
    public address: string

    @Prop()
    public payment: string

}

export const OrderSchema = SchemaFactory.createForClass(OrderEntity);