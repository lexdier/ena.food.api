import {Model} from "mongoose";
import {AbstractEntity} from "./abstract.entity";
import {Injectable} from "@nestjs/common";
import {OrderEntity} from "../entities/order.entity";

@Injectable()
export abstract class AbstractRepository {

    protected readonly model: Model<AbstractEntity>

    public find() {
        return this.model.find()
    }

    public abstract create(validator: any)

    public read() {

    }

    public async update(id, validator) {
        const order: OrderEntity = await this.model.findById(id)

        order.user = validator.user
        order.items = validator.items
        order.address = validator.address
        order.payment = validator.payment

        return order.save()
    }

    public delete(id: string) {
        return this.model.deleteOne({_id: id})
    }

}