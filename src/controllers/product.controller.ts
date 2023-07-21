import {Body, Controller, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {ProductRepository} from "../repositories/product.repository";
import {ProductValidator, UpdateProductValidator} from "../validators/product.validator";

@Controller('/products')
export class ProductController {

    @Inject()
    protected readonly $repository: ProductRepository;

    @Get('/')
    public users() {
        return this.$repository.find()
    }

    @Post('/')
    public new(@Body() validator: ProductValidator) {
        return this.$repository.create(validator)
    }

    @Put('/:id')
    public update(@Body() validator: UpdateProductValidator, @Param('id') id: string) {
        return this.$repository.update(id, validator)
    }

}