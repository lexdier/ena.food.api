import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import {ItemEntity} from "./item.entity";
import {UserEntity} from "./user.entity";
import {ShopEntity} from "./shop.entity";

@Collection({timestamps: true})
export class CartEntity extends AbstractEntity {

    @Prop({type: mongoose.Schema.Types.Array, ref: 'items'})
    public items: ItemEntity[]

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'users'})
    public user: UserEntity

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'shops'})
    public shop: ShopEntity

}

export const CartSchema = SchemaFactory.createForClass(CartEntity);