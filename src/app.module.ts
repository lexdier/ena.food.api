import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./entities/user.entity";
import {ItemSchema} from "./entities/item.entity";
import {ShopSchema} from "./entities/shop.entity";
import {OrderSchema} from "./entities/order.entity";
import {UserRepository} from "./repositories/user.repository";
import {UserController} from "./controllers/user.controller";
import {ProductSchema} from "./entities/product.entity";

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://test:qqsUMu7gUfnDhMFD@enafood.a9omlgi.mongodb.net/'
        ),
        MongooseModule.forFeature([
            {name: 'users', schema: UserSchema},
            {name: 'items', schema: ItemSchema},
            {name: 'shops', schema: ShopSchema},
            {name: 'orders', schema: OrderSchema},
            {name: 'products', schema: ProductSchema}
        ])
    ],
    controllers: [AppController, UserController],
    providers: [AppService, UserRepository],
})
export class AppModule {
}
