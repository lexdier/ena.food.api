import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CartEntity} from "../entities/cart.entity";
import {CartValidator, UpdateCartValidator} from "../validators/cart.validator";

export class CartRepository extends AbstractRepository {

    @InjectModel('carts')
    protected readonly model: Model<CartEntity>

    public create(validator: CartValidator) {

        const cart: CartEntity = new this.model()

        cart.items = validator.items
        cart.user = validator.user

        return this.model.create(cart)

    }

    public async update(id: string, validator: UpdateCartValidator) {
        const cart: CartEntity = await this.model.findById(id)

        // @ts-ignore
        cart.items = validator.items
        cart.user = validator.user

        return cart.save()

    }

}