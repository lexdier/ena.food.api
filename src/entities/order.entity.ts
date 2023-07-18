import {UserEntity} from "./user.entity";
import {ItemEntity} from "./item.entity";
import {ShopEntity} from "./shop.entity";

export class OrderEntity {

    public items: ItemEntity
    public shop: ShopEntity

}