import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {OrderEntity} from "../entities/order.entity";
import {UpdateOrderValidator} from "../validators/order.validator";

export class OrderRepository extends AbstractRepository {

    @InjectModel('orders')
    protected readonly model: Model<OrderEntity>

    public create(validator) {

        const order: OrderEntity = new this.model()

        order.user = validator.user
        order.address = validator.address
        order.payment = validator.payment
        order.items.push(validator.items)

        return this.model.create(order)
    }

    public async update(id: string, validator: UpdateOrderValidator) {
        const order: OrderEntity = await this.model.findById(id)

        order.user = validator.user as any
        order.items = validator.items
        order.address = validator.address
        order.payment = validator.payment

        return order.save()

    }

}