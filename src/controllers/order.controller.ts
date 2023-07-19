import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {OrderRepository} from "../repositories/order.repository";
import {OrderValidator} from "../validators/order.validator";

@Controller('/orders')
export class OrderController {

    @Inject()
    protected readonly $repository: OrderRepository;

    @Get('/')
    public orders() {
        return this.$repository.find()
    }

    @Post('/')
    public new(@Body() validator: OrderValidator) {
        return this.$repository.create(validator)
    }

    @Delete('/:id')
    public remove(@Param('id') id: string) {
        return this.$repository.delete(id)
    }

    @Put(':id')
    public update(@Body() validator: OrderValidator, @Param('id') id: string) {
        return this.$repository.update(id, validator)
    }

}