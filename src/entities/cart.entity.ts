import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import {ItemEntity} from "./item.entity";

@Collection({timestamps: true})
export class CartEntity extends AbstractEntity {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'items'})
    public items: ItemEntity[]

}

export const CartSchema = SchemaFactory.createForClass(CartEntity);