import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserEntity} from "./entities/user.entity";
import {ItemEntity} from "./entities/item.entity";
import {ShopEntity} from "./entities/shop.entity";
import {OrderEntity} from "./entities/order.entity";

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://test:qqsUMu7gUfnDhMFD@enafood.a9omlgi.mongodb.net/'
        ),
        MongooseModule.forFeature([
            {name: 'users', schema: UserEntity},
            {name: 'items', schema: ItemEntity},
            {name: 'shops', schema: ShopEntity},
            {name: 'orders', schema: OrderEntity}
        ])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
