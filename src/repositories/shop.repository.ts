import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ShopEntity} from "../entities/shop.entity";

export class ShopRepository extends AbstractRepository {

    @InjectModel('shops')
    protected readonly model: Model<ShopEntity>

    public create(validator) {
        return this.model.create(validator)
    }

}