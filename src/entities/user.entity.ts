import {Prop, Schema as Collection, SchemaFactory} from "@nestjs/mongoose";
import {AbstractEntity} from "../abstract/abstract.entity";
import {Schema} from "mongoose";

@Collection()
export class UserEntity extends AbstractEntity {

    @Prop({type: Schema.Types.String})
    public name: string

}

export const UserSchema = SchemaFactory.createForClass(UserEntity);