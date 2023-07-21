import {Body, Controller, Get, Inject, Param, Post, Put} from "@nestjs/common";
import {UserRepository} from "../repositories/user.repository";
import {UpdateUserValidator, UserValidator} from "../validators/user.validator";

@Controller('/users')
export class UserController {

    @Inject()
    protected readonly $repository: UserRepository;

    @Get('/')
    public users() {
        return this.$repository.find()
    }

    @Post('/')
    public new(@Body() validator: UserValidator) {
        return this.$repository.create(validator)
    }

    @Put('/:id')
    public update(@Body() validator: UpdateUserValidator, @Param('id') id: string) {
        return this.$repository.update(id, validator)
    }

}