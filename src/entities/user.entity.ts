import {Prop} from "@nestjs/mongoose";

export class UserEntity {

    @Prop()
    public name: string

}