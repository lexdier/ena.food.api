import {AbstractRepository} from "../abstract/abstract.repository";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ShopEntity} from "../entities/shop.entity";
import {UpdateShopValidator} from "../validators/shop.validator";

export class ShopRepository extends AbstractRepository {

    @InjectModel('shops')
    protected readonly model: Model<ShopEntity>

    public create(validator) {

        const shop: ShopEntity = new this.model()

        shop.name = validator.name

        return this.model.create(validator)
    }

    public async update(id: string, validator: UpdateShopValidator) {

        const shop: ShopEntity = await this.model.findById(id)

        shop.name = validator.name
        shop.address = validator.address

        return shop.save()

    }

}