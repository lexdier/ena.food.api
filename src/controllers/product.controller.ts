import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {ProductRepository} from "../repositories/product.repository";
import {ProductValidator} from "../validators/product.validator";

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

}