import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import mongoose from "mongoose";
import {ShopEntity} from "./shop.entity";

@Collection()
export class ProductEntity extends AbstractEntity {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'shops'})
    public shop: ShopEntity

    @Prop()
    public name: string

}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);