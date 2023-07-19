import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {OrderEntity} from "../entities/order.entity";

export class OrderRepository extends AbstractRepository {

    @InjectModel('orders')
    protected readonly model: Model<OrderEntity>

    public create(data) {

        const order: OrderEntity = new this.model()

        order.address = data.address

        return this.model.create(order)

    }

}