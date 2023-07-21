import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserEntity} from "../entities/user.entity";
import {UserValidator} from "../validators/user.validator";

export class UserRepository extends AbstractRepository {

    @InjectModel('users')
    protected readonly model: Model<UserEntity>

    public create(validator) {
        const user: UserEntity = new this.model()

        user.name = validator.name
        return this.model.create(user)
    }

    public async update(id: string, validator: UserValidator) {

        const user: UserEntity = await this.model.findById(id)

        user.name = validator.name
        user.address = validator.address

        return user.save()

    }

}