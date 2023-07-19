import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {ShopRepository} from "../repositories/shop.repository";
import {ShopValidator} from "../validators/shop.validator";

@Controller('/shops')
export class ShopController {

    @Inject()
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