import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {UserRepository} from "../repositories/user.repository";

@Controller('/users')
export class UserController {

    @Inject()
    protected readonly $repository: UserRepository;

    @Get('')
    public users(){
        return [2]
    }

    @Post('/new')
    public new(@Body() data){
        return this.$repository.create(data)
    }
}