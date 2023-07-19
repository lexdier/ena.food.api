import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import mongoose from "mongoose";
import {ShopEntity} from "./shop.entity";

@Collection({timestamps: true})
export class ProductEntity extends AbstractEntity {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'shops'})
    public shop: ShopEntity

    @Prop()
    public name: string

    @Prop()
    public available: boolean

}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);