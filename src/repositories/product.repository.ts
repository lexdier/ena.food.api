import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ProductEntity} from "../entities/product.entity";

export class ProductRepository extends AbstractRepository {

    @InjectModel('products')
    protected readonly model: Model<ProductEntity>

    public create(validator) {
        const product: ProductEntity = new this.model()

        product.name = validator.name
        product.available = validator.available
        product.shop = validator.shop

        return this.model.create(product)
    }

}