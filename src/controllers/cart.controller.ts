import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {CartRepository} from "../repositories/cart.repository";
import {CartValidator, UpdateCartValidator} from "../validators/cart.validator";

@Controller('/carts')
export class CartController {

    @Inject()
    protected readonly $repository: CartRepository;

    @Get('/')
    public carts() {
        return this.$repository.find()
    }

    @Post('/')
    public new(@Body() validator: CartValidator) {
        return this.$repository.create(validator)
    }

    @Delete('/:id')
    public remove(@Param('id') id: string) {
        return this.$repository.delete(id)
    }

    @Put(':id')
    public update(@Body() validator: UpdateCartValidator, @Param('id') id: string) {
        return this.$repository.update(id, validator)
    }

}