import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {OrderRepository} from "../repositories/order.repository";
import {OrderValidator} from "../validators/order.validator";

@Controller('/orders')
export class OrderController {

    @Inject()
    protected readonly $repository: OrderRepository;

    @Get('/')
    public orders() {
        return [2]
    }

    @Post('/')
    public new(@Body() validator: OrderValidator) {
        return this.$repository.create(validator)
    }
}