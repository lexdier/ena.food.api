import {Body, Get, Inject, Post} from "@nestjs/common";
import {ShopRepository} from "../repositories/shop.repository";
import {ShopValidator} from "../validators/shop.validator";

export class ShopController {

    @Inject('shops')
    protected readonly $repository: ShopRepository;

    @Get('/')
    public find() {
        return this.$repository.find()
    }

    @Post('/')
    public new(@Body() validator: ShopValidator) {
        return this.$repository.create(validator)
    }

}