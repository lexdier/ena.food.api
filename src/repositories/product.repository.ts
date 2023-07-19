import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserEntity} from "../entities/user.entity";

export class ProductRepository extends AbstractRepository {

    @InjectModel('products')
    protected readonly model: Model<UserEntity>

    public create(data) {
        const product: UserEntity = new this.model()

        product.name = data.name
        return this.model.create(product)
    }

}