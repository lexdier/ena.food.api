import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {ProductRepository} from "../repositories/product.repository";

@Controller('/products')
export class ProductController {

    @Inject()
    protected readonly $repository: ProductRepository;

    @Get('/')
    public users() {
        return this.$repository.find()
    }

    @Post('/')
    public new(@Body() validator) {
        return this.$repository.create(validator)
    }

}