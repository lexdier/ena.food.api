import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserEntity} from "../entities/user.entity";

export class UserRepository extends AbstractRepository {

    @InjectModel('users')
    protected readonly model: Model<UserEntity>

    public create(validator) {
        const user: UserEntity = new this.model()

        user.name = validator.name
        return this.model.create(user)
    }

}