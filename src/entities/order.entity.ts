import {UserEntity} from "./user.entity";
import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {ItemEntity} from "./item.entity";
import {AbstractEntity} from "../abstract/abstract.entity";

@Collection()
export class OrderEntity extends AbstractEntity {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'users'})
    user: UserEntity

    @Prop({type: [{type: mongoose.Schema.Types.Array, ref: 'items'}]})
    item: ItemEntity[]

    @Prop()
    public name: string

}

export const OrderSchema = SchemaFactory.createForClass(OrderEntity);