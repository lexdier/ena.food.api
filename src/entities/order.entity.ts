import {UserEntity} from "./user.entity";
import {Prop, Schema as Collection} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {ItemEntity} from "./item.entity";

@Collection()
export class OrderEntity {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'users'})
    user: UserEntity

    @Prop({type: [{type: mongoose.Schema.Types.Array, ref: 'items'}]})
    item: ItemEntity[]

    @Prop()
    public name: string

}