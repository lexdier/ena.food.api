import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";

@Collection()
export class ProductEntity extends AbstractEntity {

    @Prop()
    public name: string

}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);