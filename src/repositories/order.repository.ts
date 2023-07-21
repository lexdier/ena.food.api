import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {OrderEntity} from "../entities/order.entity";
import {OrderValidator, UpdateOrderValidator} from "../validators/order.validator";

export class OrderRepository extends AbstractRepository {

    @InjectModel('orders')
    protected readonly model: Model<OrderEntity>

    public create(validator: OrderValidator) {

        const order: OrderEntity = new this.model()

        order.address = validator.address
        order.payment = validator.payment
        order.cart = validator.cart

        return this.model.create(order)
    }

    public async update(id: string, validator: UpdateOrderValidator) {
        const order: OrderEntity = await this.model.findById(id)

        order.cart = validator.cart
        order.address = validator.address
        order.payment = validator.payment

        return order.save()

    }

}