import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {OrderRepository} from "../repositories/order.repository";
import {OrderValidator, UpdateOrderValidator} from "../validators/order.validator";

@Controller('/orders')
export class OrderController {

    @Inject()
    protected readonly $repository: OrderRepository;

    @Get('/')
    public orders() {
        return this.$repository.find()
    }

    @Get('/:id')
    public findById(@Param('id') id: string) {
        return this.$repository.read(id)
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
    public update(@Body() validator: UpdateOrderValidator, @Param('id') id: string) {
        return this.$repository.update(id, validator)
    }

}