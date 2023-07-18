import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";

@Collection()
export class ShopEntity {

    @Prop()
    public name: string

}

export const ShopSchema = SchemaFactory.createForClass(ShopEntity);