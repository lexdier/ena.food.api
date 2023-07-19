import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {OrderEntity} from "../entities/order.entity";

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

}