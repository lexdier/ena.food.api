import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import {Schema} from "mongoose";

@Collection({timestamps: true})
export class UserEntity extends AbstractEntity {

    @Prop({type: Schema.Types.String})
    public name: string

    @Prop({type: Schema.Types.String})
    public address: string

}

export const UserSchema = SchemaFactory.createForClass(UserEntity);