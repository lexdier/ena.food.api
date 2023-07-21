import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ProductEntity} from "../entities/product.entity";
import {ProductValidator} from "../validators/product.validator";

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

    public async update(id: string, validator: ProductValidator) {

        const product: ProductEntity = await this.model.findById(id)

        product.shop = validator.shop as any
        product.name = validator.name
        product.available = validator.available

        return product.save()
    }

}