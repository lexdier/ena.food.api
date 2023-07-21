import {Body, Controller, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {ShopRepository} from "../repositories/shop.repository";
import {ShopValidator, UpdateShopValidator} from "../validators/shop.validator";

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

    @Put('/:id')
    public update(@Body() validator: UpdateShopValidator, @Param('id') id: string) {
        return this.$repository.update(id, validator)
    }

}