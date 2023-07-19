import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {UserRepository} from "../repositories/user.repository";
import {UserValidator} from "../validators/user.validator";

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

}